import React from "react";
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
import { Colors } from "../../configs/color";
import { products } from "../../data/products";
import { Rating } from "./";

function HomeProducts() {
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
              <Rating value={product.rating} text={product.numReviews} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
