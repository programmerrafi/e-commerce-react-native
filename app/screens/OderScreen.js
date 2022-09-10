import { Box, ScrollView, Heading } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../configs/color";
import React from "react";
import OrderInfo from "../components/PlaceOrder/OrderInfo";
import OderItem from "../components/PlaceOrder/OderItem";
import OrderModel from "../components/Order/OrderModel";

const OderScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen} pt={6} safeAreaTop>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pr={10}
        >
          <OrderInfo
            title="SHIPPING INFO"
            success
            subTitle="Shipping: Sumi"
            text="Pay Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address:"
            danger
            text="H-222, Road-2, Block-E, Dhaka 1219"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OderItem />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OderScreen;
