import {
  Text,
  Center,
  HStack,
  VStack,
  Modal,
  Button,
  Pressable,
  Image,
} from "native-base";
import { Colors } from "../../configs/color";
import React from "react";
import { useState } from "react";
import Buttone from "../shared/Buttone";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
  {
    title: "Products",
    price: 125.34,
    color: "black",
  },
  {
    title: "Shipping",
    price: 34,
    color: "black",
  },
  {
    title: "Tax",
    price: 23,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 3480.11,
    color: "main",
  },
];

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <Buttone
        bg={Colors.main}
        color={Colors.white}
        mt={5}
        onPress={() => setShowModel(true)}
        pressBg={Colors.black}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxH="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
