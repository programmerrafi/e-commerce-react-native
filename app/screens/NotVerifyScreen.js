import React from "react";
import { Box, Center, Image, VStack } from "native-base";
import { Colors } from "../configs/color";
import Buttone from "../components/shared/Buttone";

const NotVerifyScreen = () => {
  return (
    <Box bg={Colors.main} flex={1} safeAreaTop>
      <Center className="w-full h-[250px]">
        <Image
          source={require("../assets/fav.jpg")}
          alt="fav"
          className="w-32 h-32 rounded-full"
        />
      </Center>
      <VStack space={6} className="px-5 items-center">
        <Buttone color={Colors.white} bg={Colors.black} pressBg="#1D4900">
          REGISTER
        </Buttone>
        <Buttone color={Colors.black} bg={Colors.white} pressBg="#f2f2f2">
          REGISTER
        </Buttone>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
