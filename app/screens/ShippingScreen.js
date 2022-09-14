import {
  Text,
  Box,
  ScrollView,
  Center,
  VStack,
  FormControl,
  Input,
} from "native-base";
import { Colors } from "../configs/color";
import React from "react";
import Buttone from "../components/shared/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "number",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

const ShippingScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* iNPUTS */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  bg={Colors.subGreen}
                  py={2.5}
                  color={Colors.main}
                  fontSize={14}
                  type={i.type}
                  _focus={{
                    bg: Colors.subGreen,
                    borderColor: Colors.main,
                    borderWidth: 0.7,
                  }}
                  // placeholder={i.label}
                />
              </FormControl>
            ))}
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              pressBg={Colors.deepGray}
              mt={5}
              onPress={() => navigation.navigate("Checkout")}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
