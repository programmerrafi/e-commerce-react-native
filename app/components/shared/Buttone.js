import React from "react";
import { Button } from "native-base";

function Buttone({ mt, bg, color, children, omPress, pressBg }) {
  return (
    <Button
      className="w-full h-[55px] font-bold rounded-full"
      mt={mt}
      bg={bg}
      _text={{ color: color }}
      _pressed={{ bg: pressBg }}
      omPress={omPress}
    >
      {children}
    </Button>
  );
}

export default Buttone;
