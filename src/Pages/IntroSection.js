import React from "react";
import {
  useColorModeValue,
  Box,
  Heading,
  Text,
  Fade,
  Collapse,
  Flex,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import ButtonGroup from "../Components/ButtonGroup";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMailBulk,
} from "react-icons/fa";

const IntroSection = ({ heading, buttons }) => {
  const color = useColorModeValue("blue.600", "yellow.200");
  const highlightColor = useColorModeValue("red.500", "blue.200");
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin={["10", "15", "20"]}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Collapse in={heading}>
          <Box mb={4}>
            <Heading fontSize={["4xl", "6xl", "8xl"]} color={color}>
              Creating and developing{" "}
              <Text display="inline-block" color={highlightColor}>
                high quality
              </Text>{" "}
              content for the internet world
            </Heading>
          </Box>
        </Collapse>
        <Fade in={heading}>
          <Box mt={4}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.2rem"
              fontSize={["md", "lg", "xl"]}
              fontWeight="400"
            >
              Sumant Guha
            </Text>
          </Box>
        </Fade>
      </Flex>
      <Fade in={buttons}>
        <SimpleGrid
          mt="4rem"
          spacing={["1.5rem", null, "2rem"]}
          columns={[2, null, null, 4]}
        >
          <ButtonGroup bg={color} name={<FaFacebookF />} />
          <ButtonGroup bg={color} name={<FaLinkedinIn />} />
          <ButtonGroup bg={color} name={<FaGithub />} />
          <ButtonGroup bg={color} name={<FaMailBulk />} />
        </SimpleGrid>
      </Fade>
    </Flex>
  );
};

export default IntroSection;
