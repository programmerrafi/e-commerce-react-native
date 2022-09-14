import {
  Text,
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Rating } from "../components/shared";
import { Colors } from "../configs/color";
import Buttone from "../components/shared/Buttone";
import Review from "../components/SingleProduct/Review";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  return (
    <Box safeArea className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} px={5}>
        <Image
          source={product.image}
          alt="Image"
          w="full"
          h={250}
          resizeMode="contain"
        />
        <Heading className="font-bold text-sm mt-8 mb-2 leading-2">
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} className="items-center my-5">
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              onChange={(value) => setValue(value)}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading className="font-bold text-redC italic text-xs">
              Out of stock
            </Heading>
          )}
          <Spacer />
          <Heading className="font-bold text-black text-base">
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} className="font-medium">
          {product.description}
        </Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          pressBg="#8BC34A"
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CARD
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
