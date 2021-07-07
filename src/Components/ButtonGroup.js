import React from "react";
import { IconButton } from "@chakra-ui/react";

const ButtonGroup = ({ props, bg, name }) => {
  return (
    <IconButton
      transition="0.3s"
      _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
      _active={{ transform: "scale(0.9)", transition: "0.3s" }}
      size="lg"
      p={["7", null, "8"]}
      // colorScheme={bg}
      fontSize={["35px", null, "40px"]}
      icon={name}
      variant="ghost"
      borderWidth={["1px", null, "2px"]}
      borderColor={bg}
      color={bg}
      {...props}
    />
  );
};

export default ButtonGroup;
