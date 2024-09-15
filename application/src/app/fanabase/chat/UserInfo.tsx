"use client";

import {
    Avatar, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text
} from '@chakra-ui/react';

interface UserInfoProps {
  isOpen: boolean;
  onClose: () => void;
  userDetails: {
    name: string;
    username: string;
    email: string;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({
  isOpen,
  onClose,
  userDetails,
}) => {
  console.log("UserInfo isOpen:", isOpen);
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{userDetails.username}&rsquo;s Profile</DrawerHeader>
        <DrawerBody>
          <Avatar name={userDetails.name} mb={4} />
          <Text>
            <strong>Name:</strong> {userDetails.name}
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
