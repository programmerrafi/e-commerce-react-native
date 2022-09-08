import React from "react";
import { Input, Pressable, Text, HStack } from "native-base";
import { Colors } from "../../configs/color";
import { FontAwesome } from "@expo/vector-icons";

function HomeSearch() {
  return (
    <HStack
      safeAreaTop
      w="full"
      bg={Colors.main}
      px={6}
      py={4}
      alignItems="center"
    >
      <Input
        placeholder="Nike, Puma, Adidas ..."
        className="bg-white"
        w="85%"
        h={10}
        borderWidth={0}
        variant="filled"
        type="search"
      />
      <Pressable ml={3}>
        <FontAwesome name="shopping-basket" size={24} color={Colors.white} />
        <Text className="px-1 rounded-full absolute -top-3 left-2 bg-redC text-white text-xs">
          5
        </Text>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
