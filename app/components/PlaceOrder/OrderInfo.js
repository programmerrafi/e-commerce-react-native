import { Text, Heading, Center } from "native-base";
import { Colors } from "../../configs/color";
import React from "react";

const OrderInfo = ({ icon, title, subTitle, text, success, dander }) => {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading
        bold
        fontSize={12}
        isTruncated
        mt={3}
        mb={2}
        color={Colors.black}
      >
        {title}
      </Heading>
      <Text fontSize={13} color={Colors.black}>
        {subTitle}
      </Text>
      <Text fontSize={13} textAlign="center" italic color={Colors.black}>
        {text}
      </Text>
      {/* Status */}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blueC}>
          <Text fontSize={12} color={Colors.white}>
            Paid on Jan 12 2021
          </Text>
        </Center>
      )}
      {dander && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.redC}>
          <Text fontSize={12} color={Colors.white}>
            Not Deliver
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;
