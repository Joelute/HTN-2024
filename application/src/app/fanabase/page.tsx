'use client'

import React, { useState } from 'react';
import {
    Container,
    Flex,
    Input,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Heading,
    VStack,
    Icon,
    ChakraProvider
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const dummyData = [
    { name: 'Alice', age: 25, nickname: 'Ally', email: 'alice@example.com' },
    { name: 'Bob', age: 30, nickname: 'Bobby', email: 'bob@example.com' },
    { name: 'Charlie', age: 35, nickname: 'Char', email: 'charlie@example.com' },

];

const fanabase = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = dummyData.filter(user =>
        user.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ChakraProvider>
            <Container maxW="container.xl" p={4}>
                <Flex direction="column" minH="100vh">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        mb={6}
                        padding="1rem"
                    >
                        <Flex alignItems="center">
                            <img src="../passes.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                            <Heading size="lg">Fanabase</Heading>
                        </Flex>
                        <Input
                            placeholder="Search by username"
                            width="300px"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            prefix={<Icon as={FaSearch} />}
                        />
                    </Flex>

                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Age</Th>
                                <Th>Nickname</Th>
                                <Th>Email</Th>
                                <Th>Start Chatting</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredData.map((user, index) => (
                                <Tr key={index}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.age}</Td>
                                    <Td>{user.nickname}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>
                                        <Button colorScheme="blue" size="sm">
                                            Chat
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Flex>
            </Container>
        </ChakraProvider>

    );
};

export default fanabase;
