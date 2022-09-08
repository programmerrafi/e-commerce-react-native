import {
  Text,
  Box,
  Heading,
  VStack,
  FormControl,
  Select,
  CheckIcon,
} from "native-base";
import React from "react";
import { useState } from "react";
import { Colors } from "../../configs/color";
import Message from "../Notifications/Message";
import { Rating } from "../shared";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* If there is no review */}
      <Message color={Colors.main} bg={Colors.deepGray} size={12} bold>
        NO REVIEW
      </Message>
      {/* Review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text mb={2} fontSize={11}>
          Aug 12 2022
        </Text>
        <Message color={Colors.black} bg={Colors.white} size={12}>
          NativeBase VS Code Extensions are specifically designed to quicken
          your development process using NativeBase 3.0.
        </Message>
      </Box>
      {/* Write review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
