"use client";

import { useQuery } from 'convex/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

import { api } from '@/../convex/_generated/api';
import { Id } from '@/../convex/_generated/dataModel';
import {
    Box, Button, ChakraProvider, Flex, Heading, IconButton, Input, Stack, Text, useDisclosure
} from '@chakra-ui/react';

import UserInfo from './UserInfo'; // Import UserInfo component

const ChatRoom = () => {
  const searchParams = useSearchParams(); // Use useSearchParams to get the dynamic route parameters
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Extract userId from the route parameters
  const userId = searchParams.get("id") as Id<"users">;

  const userData = useQuery(api.queries.getUserById.getUserById, { userId });

  if (!userData) {
    console.log("User data is not fetched or returned as null/undefined.");
  } else {
    console.log("Fetched user data:", userData);
  }

  const [message, setMessage] = useState(""); // State to hold the current message
  const [messages, setMessages] = useState<any[]>([]); // State to hold the list of messages

  useEffect(() => {
    // Set user details and load messages when the component mounts
    setUserDetails({
      name: "John Doe",
      nickname: "John",
      age: "25",
      email: "he@gmail.com",
    });

    // Simulate fetching chat messages from a database or API
    const chatMessages = [
      {
        content: "hiii, how are you lately!!",
        participants: ["j576h4aa8xhyebh87rzqr1p43h70tgw7", "j5768c14pp49r1qnk7vxnqb2xx70tqkt"],
        senderId: "j576h4aa8xhyebh87rzqr1p43h70tgw7",
      },
      {
        content: "i'm goooood, it's great to hear from you again ^^",
        participants: ["j576h4aa8xhyebh87rzqr1p43h70tgw7", "j5768c14pp49r1qnk7vxnqb2xx70tqkt"],
        senderId: "j5768c14pp49r1qnk7vxnqb2xx70tqkt",
      },
    ];
    setMessages(chatMessages);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { content: message, senderId: "j576h4aa8xhyebh87rzqr1p43h70tgw7" }]); // Add new message to the list
      setMessage("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
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
                  <ChatMessage key={index} content={msg.content} senderId={msg.senderId} />
              ))}
            </Stack>
          </Box>

          {/* Message input and send button */}
          <Flex>
            <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
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

export default ChatRoom;
