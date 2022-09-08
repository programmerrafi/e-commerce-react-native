import {
  Input,
  Pressable,
  Text,
  HStack,
  Box,
  ScrollView,
  Flex,
  Image,
  Heading,
} from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../configs/color";

const Rating = ({ value, text }) => {
  return (
    <HStack space={0.4} className="mt-1 items-center">
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orangeC}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orangeC}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orangeC}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orangeC}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orangeC}
      />
      {text && <Text className="text-xs ml-2">{text}</Text>}
    </HStack>
  );
};

export default Rating;
