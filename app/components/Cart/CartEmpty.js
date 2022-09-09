import { Text, Box, Center } from "native-base";
import React from "react";
import { Colors } from "../../configs/color";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "../shared/Buttone";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center h={200} w={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.black} color={Colors.white} pressBg={Colors.black}>
        START SHOPPING
      </Buttone>
    </Box>
  );
};

export default CartEmpty;
