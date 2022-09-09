import { Text, Box, Heading, Center } from "native-base";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../configs/color";
import ProfileTabs from "../components/Profile/ProfileTabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} className="pt-10 pb-6">
        <Box
          w={20}
          h={20}
          bg="#7051FF"
          shadow={2}
          className="rounded-full items-center justify-center"
        >
          <FontAwesome5 name="user-circle" size={64} color={Colors.white} />
        </Box>
        <Heading bold fontSize={15} isTruncated className="my-2 text-white">
          Admin Rafi
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* Tabs */}
      <ProfileTabs />
    </>
  );
};

export default ProfileScreen;
