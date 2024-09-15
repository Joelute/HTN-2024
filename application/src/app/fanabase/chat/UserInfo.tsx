// UserInfo.tsx
"use client";

import {
    Avatar, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text
} from '@chakra-ui/react';

interface UserInfoProps {
  isOpen: boolean;
  onClose: () => void;
  userDetails: {
    name: string;
    nickname: string;
    age: string;
    email: string;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({
  isOpen,
  onClose,
  userDetails,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{userDetails.nickname}&#39;s Profile</DrawerHeader>

        <DrawerBody>
          <Avatar name={userDetails.name} mb={4} />
          <Text>
            <strong>Name:</strong> {userDetails.name}
          </Text>
          <Text>
            <strong>Age:</strong> {userDetails.age}
          </Text>
          <Text>
            <strong>Email:</strong> {userDetails.email}
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default UserInfo;
