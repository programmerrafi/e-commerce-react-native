import React from "react";
import { Box } from "native-base";
import { HomeSearch, HomeProducts } from "../components/Home";

const HomeScreen = () => {
  return (
    <Box className="bg-subGreen flex-1">
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;
