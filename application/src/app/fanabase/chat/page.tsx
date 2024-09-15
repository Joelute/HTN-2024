"use client";

import { useQuery } from 'convex/react';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Import useParams
import { useState } from 'react';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

import { api } from '@/../convex/_generated/api';
import { Id } from '@/../convex/_generated/dataModel';
import {
    Box, Button, ChakraProvider, Flex, Heading, IconButton, Input, Stack, Text, useDisclosure
} from '@chakra-ui/react';

import UserInfo from './UserInfo'; // Import UserInfo component

const ChatRoom = () => {
  const params = useParams(); // Use useParams to get the dynamic route parameters
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Extract userId from the route parameters
  const userId = params.id as Id<"users">;

  // Query the database to fetch user details using Convex
  const userData = useQuery(api.queries.getUserById.getUserById, { userId });

  const [message, setMessage] = useState(""); // State to hold the current message
  const [messages, setMessages] = useState<string[]>([]); // State to hold the list of messages

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Add new message to the list
      setMessage(""); // Clear the input field
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
            onClick={onOpen}
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
              <Text key={index}>{msg}</Text> // Display each message
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
        {userData && (
          <UserInfo
            isOpen={isOpen}
            onClose={onClose}
            userDetails={{
              name: userData.name || "Unknown",
              username: userData.username || "User",
              email: userData.email || "N/A",
            }}
          />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default ChatRoom;
