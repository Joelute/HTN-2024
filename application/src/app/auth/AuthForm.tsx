"use client";

import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Image, Input, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'; // Make sure this is next/navigation

const AuthForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleAuth = async () => {
    if (!inputs.username || !inputs.password) {
      alert("Please fill all the fields >:(");
      return;
    }

    try {
      await router.push('/');  // Await the push to ensure it's handled
    } catch (error) {
      console.error("Navigation error:", error);  // Log any potential errors
    }
  };

  return (
      <ChakraProvider>
        <Box border={"1px solid gray"} borderRadius={15} padding={50}>
          <VStack spacing={15}>
            <Image src="../passes.png" h={34} cursor={"pointer"} alt="passes" />
            <Input
                placeholder="username"
                fontSize={24}
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
            <Input
                placeholder="password"
                fontSize={24}
                type="password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />

            <Button
                w={"full"}
                colorScheme="purple"
                fontSize={17}
                onClick={handleAuth}
            >
              Log In
            </Button>
          </VStack>
        </Box>
      </ChakraProvider>
  );
};

export default AuthForm;
