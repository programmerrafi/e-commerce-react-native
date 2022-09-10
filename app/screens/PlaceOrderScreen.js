import { Box, ScrollView, Heading } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../configs/color";
import React from "react";
import OrderInfo from "../components/PlaceOrder/OrderInfo";
import OderItem from "../components/PlaceOrder/OderItem";
import PlaceOrderModel from "../components/PlaceOrder/PlaceOrderModel";

const PlaceOrderScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen} pt={6} safeAreaTop>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pr={10}
        >
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Rafi"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Rafi"
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
            text="H-222, Road-2, Block-E, Rampura Banasree"
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
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
