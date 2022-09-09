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

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} px={5}>
        <Image
          source={require("../assets/w4.png")}
          alt="Image"
          w="full"
          h={250}
          resizeMode="contain"
        />
        <Heading className="font-bold text-sm mt-8 mb-2 leading-2">
          New Smart watch form Amazon Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} className="items-center my-5">
          <NumericInput
            value={value}
            onChange={(value) => setValue(value)}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={5}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading className="font-bold text-black text-base">$400</Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} className="font-medium">
          NativeBase VS Code Extensions are specifically designed to quicken
          your development process using NativeBase 3.0. NativeBase snippets are
          shorthand for commonly used NativeBase components. NativeBase is
          supported in Expo or React Native CLI initiated apps. Web support is
          made possible by react-native-web . Refer the guides shown below to
          setup NativeBase in your React app. NativeBase VS Code Extensions are
          specifically designed to quicken your development
        </Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          pressBg="#8BC34A"
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
