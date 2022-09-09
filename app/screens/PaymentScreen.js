import {
  Text,
  Box,
  ScrollView,
  Center,
  VStack,
  HStack,
  Image,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../configs/color";
import React from "react";
import Buttone from "../components/shared/Buttone";

const paymentMethods = [
  {
    image: require("../assets/paypal.png"),
    type: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../assets/discover.png"),
    type: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../assets/googlepay.png"),
    type: "googlepay",
    icon: "fontAwesome",
  },
];

const PaymentScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i, index) => (
              <HStack
                className="items-center px-3 py-1 justify-between rounded-md"
                bg={Colors.white}
                key={index}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt="paypal"
                    w={70}
                    h={50}
                    resizeMode="contain"
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              pressBg={Colors.deepGray}
              mt={5}
            >
              CONTINUE
            </Buttone>
            <Text italic className="text-center">
              Payment method is{" "}
              <Text italic bold>
                Paypal
              </Text>{" "}
              by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
