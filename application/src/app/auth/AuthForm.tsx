import Link from 'next/link';
import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Image, Input, VStack } from '@chakra-ui/react';

const AuthForm = () => {
  const [isLogin] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [valid, setValid] = useState(false); // Track form validity

  const handleAuth = () => {
    if (!inputs.username || !inputs.password) {
      alert("Please fill all the fields >:(");
      return;
    }
    // Set valid to true if validation passes
    setValid(true);
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

            {!isLogin ? (
                <Input
                    placeholder="Confirm password :3"
                    value={inputs.confirmPassword}
                    onChange={(e) =>
                        setInputs({ ...inputs, confirmPassword: e.target.value })}
                    fontSize={24}
                    type="password"
                />
            ) : null}

            {valid ? (
                <Link href="/" passHref>
                  <Button
                      w={"full"}
                      colorScheme="purple"
                      size={"sm"}
                      fontSize={17}
                  >
                    {isLogin ? "Log in" : "Sign up"}
                  </Button>
                </Link>
            ) : (
                <Button
                    w={"full"}
                    colorScheme="purple"
                    size={"sm"}
                    fontSize={17}
                    onClick={handleAuth}
                >
                  {isLogin ? "Log in" : "Sign up"}
                </Button>
            )}
          </VStack>
        </Box>
      </ChakraProvider>
  );
};

export default AuthForm;
