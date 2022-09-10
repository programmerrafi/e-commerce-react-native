import { Text, Center, HStack, VStack, Modal, Button } from "native-base";
import { Colors } from "../../configs/color";
import React from "react";
import { useState } from "react";
import Buttone from "../shared/Buttone";

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

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        bg={Colors.black}
        color={Colors.white}
        mt={5}
        onPress={() => setShowModel(true)}
        pressBg={Colors.black}
      >
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setShowModel(false)}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
