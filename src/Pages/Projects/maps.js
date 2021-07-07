import React from "react";
import {
  Box,
  ModalBody,
  Button,
  Heading,
  Link,
  Code,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsPlay, BsFileEarmarkCode } from "react-icons/bs";

const Maps = () => {
  const firstColor = useColorModeValue("red", "yellow");
  const secondColor = useColorModeValue("blue.600", "yellow.200");
  return (
    <Box>
      <ModalBody>
        <SimpleGrid columns={[1, null, 2]} spacing="5">
          <Button leftIcon={<BsPlay />} colorScheme={firstColor} size="lg">
            <Link
              as="a"
              _hover={{ textDecor: "none" }}
              href="https://github.com/sumantguha/Java-Style-Checker"
              isExternal={true}
            >
              Try Now
            </Link>
          </Button>
          <Button leftIcon={<BsFileEarmarkCode />} colorScheme="blue" size="lg">
            <Link
              as="a"
              _hover={{ textDecor: "none" }}
              href="https://github.com/sumantguha/Java-Style-Checker"
              isExternal={true}
            >
              View Source Code
            </Link>
          </Button>
        </SimpleGrid>
        <br />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Development Frameworks:
        </Heading>
        <Code children="Java" mr={2} />
        <br />
        <br />
        For my datastructures and algorithms coursework, I developed HuskyMaps,
        a map visualization (similar to google maps) specific to the University
        of Washington. It uses data about the university campus to plot out the
        entire university and can give directions between any two points of the
        campus. It computes distances between the different buildings on campus
        and acts as a simple front end interface for studets and faculty. It
        covers more than a standard google maps search within the university
        because it has a more accurate representation of different buildings. It
        was very interesting to develop this full stack implementation of the
        map service, because it required me to work with multiple (Java)
        frameworks and more importantly, design efficient algorithms at scale.
        To determine the shortest path between any two buildings/points within
        campus, an efficient implementation of A* graph search was integrated.
        The entire grid of buildings was represented as a large graph and hence
        searching was fairly inexpensive over this structure. To interface with
        the front-end, we needed to keep track of the exact point that users'
        clicked, which was done through KD Trees. Overall, multiple algorithms
        were used within this application to ensure efficient computation and
        fast response time
      </ModalBody>
    </Box>
  );
};

export default Maps;
