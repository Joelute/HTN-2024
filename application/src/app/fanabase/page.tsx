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
    ChakraProvider,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Textarea,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Link from "next/link";
import { api } from '@/../convex/_generated/api';
import { useQuery } from 'convex/react';

type User = {
    _id: number
    _creationTime: number;
    name: string;
    email: string;
    interests: string[];
    username: string;
    summarizedData: string;
} 

const Fanabase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const data = useQuery(api.queries.getAllUsers.getAllUsers)
    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal

    const filteredData = data?.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
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
                        />
                    </Flex>

                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Username</Th>
                                <Th>Email</Th>
                                <Th>Start Chatting</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {filteredData && filteredData.length > 0 ? filteredData.map(user =>( 
                            <Tr>
                                <Td>{user.name}</Td>
                                <Td>{user.username}</Td>
                                <Td>{user.email}</Td>
                                <Td>
                                        <Link href={`/fanabase/chat?name=${user.name}&nickname=${user.username}&email=${user.email}`} passHref>
                                        <Button colorScheme="pink" size="sm">
                                            Chat
                                        </Button>
                                        </Link>
                                </Td>
                            </Tr>)) : null}
                        </Tbody>
                    </Table>
                    <Flex justifyContent="flex-end" mt={4}>
                        <Button colorScheme="purple" size="md" onClick={onOpen}>
                            Massive Send ✨
                        </Button>
                    </Flex>

                    {/* Massive Send Modal */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Massive Send ✨</ModalHeader>
                            <ModalBody>
                                <Textarea
                                    placeholder="Write your message here..."
                                    size="md"
                                    mb={4}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="blue" onClick={onClose}>
                                    Send to All
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Flex>
            </Container>
        </ChakraProvider>
    );
};

export default Fanabase;
