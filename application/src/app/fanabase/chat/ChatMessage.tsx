// ChatMessage.tsx
"use client";

import { Box, Flex, Text } from '@chakra-ui/react';

interface ChatMessageProps {
    content: string;
    senderId: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, senderId }) => {
    return (
        <Flex
            direction={senderId === "j576h4aa8xhyebh87rzqr1p43h70tgw7" ? "row-reverse" : "row"}
            align="flex-start"
            mb={2}
        >
            <Box
                p={3}
                borderRadius="md"
                bg={senderId === "j576h4aa8xhyebh87rzqr1p43h70tgw7" ? "blue.100" : "gray.100"}
                maxWidth="70%"
                wordBreak="break-word"
            >
                <Text>{content}</Text>
            </Box>
        </Flex>
    );
};

export default ChatMessage;
