'use client'

import React from 'react'
import { Container, Flex, VStack} from "@chakra-ui/react";
import AuthForm from './AuthForm'


const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    {/* right hand-side */}
                    <VStack spacing={4} align={"stretch"}>
                        <AuthForm />
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage

