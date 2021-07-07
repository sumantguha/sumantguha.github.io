import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Center,
  useColorModeValue,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Header from "../Components/Header";

import workingLight from "../images/workingLight.svg";
import workingDark from "../images/workingDark.svg";

const AboutMe = ({ props, scrollRef }) => {
  const image = useColorModeValue(workingLight, workingDark);
  return (
    <Flex
      id="about"
      w="100%"
      // h={["80%", null, null, "100vh"]}
      p={["5", "10", "20"]}
      justifyContent="center"
      alignItems="center"
      ref={scrollRef}
      {...props}
    >
      <Box maxW={{ base: "100%", lg: "50%" }}>
        <Header description="learn more" title="About Me" />
        <Text mt="10" fontSize="lg" fontWeight={300}>
          Hello 👋 I'm Sumant, a 21 year old undergraduate student based out of
          Seattle, Washington. Welcome to my slice of the web 😀 <br /> <br />
          I am a junior studying electrical and computer engineering at the
          University of Washington. Passionate about promoting inclusive
          education and computational literacy, I work as a head teaching
          assistant at the Paul G Allen School of Computer Science and
          Engineering for the introductory computer science series. Teaching has
          been one of the rewarding part of my college experience yet!
          <br /> <br /> I work on a variety of projects across multiple
          platforms such as: Python, React, Java, ReactNative, JavaScript, HTML,
          CSS and C++. Take a look at some of my projects below to see my work
          💻
        </Text>
      </Box>
      <Spacer />
      <Image
        display={{ base: "none", lg: "block" }}
        maxW="50%"
        maxH="50vh"
        src={image}
      />
    </Flex>
  );
};

export default AboutMe;
