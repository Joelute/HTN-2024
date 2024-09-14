import React from 'react';
import {Flex, Button, Text, Icon, ChakraProvider} from '@chakra-ui/react';
import { FaSmile } from 'react-icons/fa'; // Example icon from react-icons
import Link from "next/link";


const HomePage = () => {
    return (
        <ChakraProvider>
            <Flex minH="100vh" flexDirection="column" px={4}>
                {/* Header */}
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    padding="2rem"
                    position="absolute"
                    width="100%"
                    top={0}
                    left={0}
                    right={0}
                >
                    <img src="../passes.png" alt="passes" style={{ height: '40px' }} />
                    <Text color="black" fontSize="lg" fontWeight={"bold"}>
                        welcome, creator
                    </Text>
                </Flex>

                {/* Main Content */}
                <Flex
                    minH="calc(100vh - 60px)" // Adjust height to fit the header
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    textAlign="center"
                >
                    {/*<Icon as={FaSmile} boxSize={12} color="blue.500" mb={4} />*/}
                    <Link href='/fanabase' passHref>
                        <Button
                            colorScheme="purple"
                            size="lg"
                            variant="solid"
                        >
                            start chatting with your amazing fans
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </ChakraProvider>

    );
}

export default HomePage;
