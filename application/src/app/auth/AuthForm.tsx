import React, {useState} from 'react';
import {Box, Button, Image, Input, VStack} from "@chakra-ui/react";
import Link from 'next/link';

const AuthForm = () => {
    const [isLogin] = useState(true)

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("Please fill all the fields >:(");
            return;
        }
    };

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='../passes.png' h={24} cursor={"pointer"} alt='passes' />
                    <Input
                        placeholder='Email'
                        fontSize={14}
                        type='email'
                        value={inputs.email}
                        onChange={(e) => setInputs({...inputs, email: e.target.value})}
                    />
                    <Input
                        placeholder='Password'
                        fontSize={14}
                        type='password'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />

                    {!isLogin ? (
                        <Input
                            placeholder='Confirm password :3'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                            fontSize={14}
                            type='password'
                        />
                    ) : null}

                    {/* Use Link for navigation after authentication */}
                    <Link href="/" passHref>
                        <Button
                            w={"full"}
                            colorScheme='blue'
                            size={"sm"}
                            fontSize={14}
                            onClick={handleAuth}
                        >
                            {isLogin ? "Log in" : "Sign up"}
                        </Button>
                    </Link>


                </VStack>
            </Box>

        </>
    );
};

export default AuthForm;
