import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const Header = ({ props, description, title }) => {
  return (
    <Box {...props}>
      <Heading
        textTransform="lowercase"
        letterSpacing="0.2rem"
        fontSize="xl"
        fontWeight="300"
      >
        {description}
      </Heading>
      <Heading fontSize="6xl">{title}</Heading>
    </Box>
  );
};

export default Header;
