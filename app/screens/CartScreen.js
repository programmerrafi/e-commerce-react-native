import { useNavigation } from "@react-navigation/native";
import { Text, Box, Center, HStack, Button } from "native-base";
import React from "react";
// import CartEmpty from "../components/Cart/CartEmpty";
import CartItems from "../components/Cart/CartItems";
import Buttone from "../components/shared/Buttone";
import { Colors } from "../configs/color";

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" className="py-5">
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* If cart is empty */}
      {/* <CartEmpty /> */}
      {/* CART ITEMS */}
      <Box pb={20} flex={1}>
        <Box style={{ flexGrow: 1, height: "85%" }}>
          <CartItems />
        </Box>

        <Box w="full" style={{ height: "20%" }}>
          {/* Total buttons */}
          <Center mt={5}>
            <HStack
              w="90%"
              h={45}
              shadow={2}
              className="rounded-full pl-5 justify-between items-center"
              bg={Colors.white}
            >
              <Text>Total</Text>
              <Button
                className="px-10 rounded-full text-white font-semibold"
                h={45}
                bg={Colors.main}
                _pressed={{
                  bg: "#7CB342",
                }}
              >
                $365
              </Button>
            </HStack>
          </Center>
          {/* Checkout */}
          <Center px={5}>
            <Buttone
              bg={Colors.black}
              color={Colors.white}
              mt={5}
              pressBg={Colors.black}
              onPress={() => navigation.navigate("Shipping")}
            >
              CHECKOUT
            </Buttone>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default CartScreen;
