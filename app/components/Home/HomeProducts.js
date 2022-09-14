import React from "react";
import {
  Pressable,
  Text,
  Box,
  ScrollView,
  Flex,
  Image,
  Heading,
} from "native-base";
import { Colors } from "../../configs/color";
import { products } from "../../data/products";
import { Rating } from "../shared";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation();

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} my={3}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={2}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={product.image}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box className="px-4 mt-1">
              <Heading size="sm" className="font-bold">
                ${product.price}
              </Heading>
              <Text className="text-[11px] font-normal" isTruncated w="full">
                {product.name}
              </Text>
              {/* Rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
