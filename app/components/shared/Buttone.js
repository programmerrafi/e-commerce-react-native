import React from "react";
import { Button } from "native-base";

function Buttone({ mb, mt, bg, color, children, omPress, pressBg }) {
  return (
    <Button
      className="w-full h-[55px] rounded-full"
      bold
      mt={mt}
      mb={mb}
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
