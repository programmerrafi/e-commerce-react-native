import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Box,
  Heading,
  Input,
  VStack,
  Button,
  Pressable,
  Text,
} from "native-base";
import { Colors } from "../configs/color";

const LoginScreen = () => {
  return (
    <Box flex={1} bg="black">
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        className="w-full"
        source={require("../assets/cover1.jpg")}
      />
      <Box className="w-full h-full absolute top-0 px-6 justify-center">
        <Heading>LOGIN</Heading>
        <VStack space={4} className="pt-6">
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            className="w-[70%] text-main border-b-underline pl-2 text-sm"
          />
          {/* password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            type="password"
            placeholder="**********"
            className="w-[70%] text-main border-b-underline pl-2 text-sm"
          />
        </VStack>
        <Button
          _pressed={{
            bg: "#3E9200",
          }}
          className={`w-[40%] my-8 rounded-3xl`}
          bg={Colors.main}
        >
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text className="text-deepestGray">SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
