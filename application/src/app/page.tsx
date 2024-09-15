import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import { Shapes } from '@components/shapes';

import passes from '../../public/passes.png';

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
          <Image src={passes} alt="passes" width={40} height={40} />
          <Text color="black" fontSize="lg" fontWeight={"bold"}>
            welcome, creator
          </Text>
        </Flex>

        {/* Main Content */}
        <Flex
          minH="calc(100vh - 200px)"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Shapes /> {/* 3D shapes component */}
          <Link href="/fanabase" passHref>
            <Button colorScheme="purple" size="lg" variant="solid">
              start chatting with your amazing fans
            </Button>
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default HomePage;
