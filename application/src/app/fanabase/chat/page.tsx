"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { useMutation, useQuery } from "convex/react";

import { api } from '@/../convex/_generated/api';
import { Id } from '@/../convex/_generated/dataModel';
import {
    Box, Button, ChakraProvider, Flex, Heading, IconButton, Input, Stack, useDisclosure
} from '@chakra-ui/react';

import ChatMessage from './ChatMessage';
import UserInfo from './UserInfo';

const ChatRoomContent = () => {
  const searchParams = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = searchParams.get("id") as Id<"users">;

  const userData = useQuery(api.queries.getUserById.getUserById, { userId });

  type UserCommunication = {
    participants: Id<"users">[];
    messages: {
      senderId: Id<"users">;
      content: string;
      timestamp: number;
    }[];
  };

  // Use `useQuery` to get the raw query data
  const rawMsgData = useQuery(
    api.queries.getUserCommunications.getUserCommunications,
    { userId }
  );

  // Memoize the fallback logic using `useMemo`
  const msgData: UserCommunication[] = useMemo(() => {
    return rawMsgData ?? [{ participants: [], messages: [] }];
  }, [rawMsgData]);

  // Add state for messages and the current message input
  const [messages, setMessages] = useState<
    { content: string; senderId: string }[]
  >([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (msgData.length > 0 && msgData[0].messages) {
      setMessages(msgData[0].messages);
    }
  }, [msgData]);

  const massSendMessages = useMutation(api.mutations.addCommunication.addCommunication)
  const handleSendMessage = () => {
    if (!message) {
      return
    }
    /* eslint-disable */
    const userData = useQuery(api.queries.getAllUsers.getAllUsers)!.map((user) => {
      return user._id
    })
    const CREATOR_ID = "j576c9rjnn2ap64qxn5typdq6h70tkr3"
    
    massSendMessages({participants: userData, senderId: CREATOR_ID as Id<"users">, content: message})
    setMessages([
        ...messages,
        { content: message, senderId: "j576h4aa8xhyebh87rzqr1p43h70tgw7" },
      ]);
    setMessage("");
  };

  const useKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      /* eslint-disable */
      handleSendMessage(); // Send message on Enter key press
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        {/* Chat Room Header */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          bg="gray.100"
          p={4}
          borderRadius="md"
        >
          <Flex alignItems="center">
            <Link href={"/fanabase"} passHref>
              <IconButton
                icon={<FaArrowLeft />}
                aria-label="Back"
                size="lg"
                mr={4}
              />
            </Link>
            <Heading size="md">{userData?.username || "User"}</Heading>
          </Flex>
          <IconButton
            icon={<FaUserCircle />}
            aria-label="Profile"
            onClick={() => {
              console.log("Profile button clicked");
              onOpen();
            }}
            size="lg"
          />
        </Flex>

        {/* Chat window */}
        <Box
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          p={4}
          height="400px"
          bg="gray.50"
          overflowY="auto"
          mb={4}
        >
          <Stack spacing={3}>
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                content={msg.content}
                senderId={msg.senderId}
              />
            ))}
          </Stack>
        </Box>

        {/* Message input and send button */}
        <Flex>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={useKeyDown}
            mr={2}
          />
          <Button colorScheme="blue" onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>

        {/* User Info Side Panel */}
        <UserInfo
          isOpen={isOpen}
          onClose={onClose}
          userDetails={{
            name: userData ? userData.name : "Unknown",
            username: userData ? userData.username : "User",
            email: userData ? userData.email : "N/A",
          }}
        />
      </Box>
    </ChakraProvider>
  );
};

const ChatRoom = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatRoomContent />
    </Suspense>
  );
};

export default ChatRoom;
