import {
  Pressable,
  Text,
  Box,
  ScrollView,
  Flex,
  Image,
  Heading,
  Center,
  HStack,
  Button,
  View,
  VStack,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../configs/color";
import React from "react";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            className="justify-between items-center px-2 py-5"
            bg={Colors.deepGray}
          >
            <Text fontSize={9} color={Colors.blueC} isTruncated>
              8547765476754685467754
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.deepGray,
              }}
            >
              $439
            </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            className="justify-between items-center px-2 py-5"
            // bg={Colors.deepGray}
          >
            <Text fontSize={9} color={Colors.blueC} isTruncated>
              8547765476754685467754
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Jan 12 2021
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.redC}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.deepGray,
              }}
            >
              $33
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
