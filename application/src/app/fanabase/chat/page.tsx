'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Heading,
    IconButton,
    Text,
    useDisclosure,
    Avatar,
    Input,
    Stack, ChakraProvider
} from '@chakra-ui/react';
import {FaArrowLeft, FaUserCircle} from 'react-icons/fa';
import Link from "next/link";

const ChatRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for drawer

    const [userDetails, setUserDetails] = useState({
        name: '',
        nickname: '',
        age: '',
        email: ''
    });

    const [message, setMessage] = useState(''); // State to hold the current message
    const [messages, setMessages] = useState<string[]>([]); // State to hold the list of messages


    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]); // Add new message to the list
            setMessage(''); // Clear the input field
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage(); // Send message on Enter key press
        }
    };

    return (
        <ChakraProvider>
            <Box p={4}>
                {/* Chat Room Header */}
                {/* Chat Room Header */}
                <Flex justifyContent="space-between" alignItems="center" mb={4} bg="gray.100" p={4} borderRadius="md">
                    <Flex alignItems="center">
                        <Link href={'/fanabase'} passHref>
                            <IconButton
                                icon={<FaArrowLeft />}
                                aria-label="Back"
                                size="lg"
                                mr={4}
                            />
                        </Link>
                        <Heading size="md">{userDetails.nickname || 'User'}</Heading>
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
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>{userDetails.nickname}'s Profile</DrawerHeader>

                        <DrawerBody>
                            <Avatar name={userDetails.name} mb={4} />
                            <Text><strong>Name:</strong> {userDetails.name}</Text>
                            <Text><strong>Age:</strong> {userDetails.age}</Text>
                            <Text><strong>Email:</strong> {userDetails.email}</Text>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </ChakraProvider>

    );
};

export default ChatRoom;
