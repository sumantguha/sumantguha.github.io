import React from "react";
import {
  Box,
  ModalBody,
  Image,
  Button,
  Link,
  useColorModeValue,
  Code,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { BsPlay, BsFileEarmarkCode, BsNewspaper } from "react-icons/bs";

import Autocomplete from "../../images/autocomplete-web.png";

const Webapps = () => {
  const firstColor = useColorModeValue("red", "yellow");
  const secondColor = useColorModeValue("blue.600", "yellow.200");
  return (
    <Box mt={2}>
      <ModalBody>
        <SimpleGrid columns={[1, null, 3]} spacing="5">
          <Button leftIcon={<BsNewspaper />} colorScheme="teal" size="lg">
            <Link
              as="a"
              _hover={{ textDecor: "none" }}
              href="https://arxiv.org/abs/2010.04671"
              isExternal={true}
            >
              Research Paper
            </Link>
          </Button>
          <Button leftIcon={<BsPlay />} colorScheme={firstColor} size="lg">
            <Link
              as="a"
              _hover={{ textDecor: "none" }}
              href="https://autocomplete-me.herokuapp.com/"
              isExternal={true}
            >
              Try Now
            </Link>
          </Button>
          <Button leftIcon={<BsFileEarmarkCode />} colorScheme="blue" size="lg">
            <Link
              as="a"
              _hover={{ textDecor: "none" }}
              href="https://github.com/kevinlin1/nifty-web-apps"
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
        <Code children="AMP" mr={2} />
        <Code children="React.js" mr={2} />
        <Code children="HTML" mr={2} />
        <Code children="CSS" />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Design Frameworks:
        </Heading>
        <Code children="Figma" />
        <br />
        <br />
        Over Summer, I worked with professor{" "}
        <Link
          color={secondColor}
          as="a"
          href="https://kevinl.info/"
          isExternal={true}
        >
          Kevin Lin
        </Link>{" "}
        to develop more interactive webapps for text-based programming
        assessments. All of the take assignments for the introductory computer
        science series that we currently support have largely text-based
        specifications with low student interactivity. This paper goes into the
        process of connecting student written code to a simple front end
        interface that dynamically responds to user interactions. Since all of
        the front end visualizations are based on AMP and direct HTML, we have
        standarized templates for developing these apps. Instructors and
        students alike can run and modify these web apps on their own computers
        or deploy their apps online for access from any smart device at no cost.
        The tutorial presents examples from CS1 and CS2 courses in Python and
        Java, but the ideas apply generally. We are presenting this work at{" "}
        <Link
          color={secondColor}
          as="a"
          href="https://sigcse2021.sigcse.org/"
          isExternal={true}
        >
          SIGCSE 2021
        </Link>
        !
        <Image src={Autocomplete} mt={5} maxW="80%" mx="auto" />
      </ModalBody>
    </Box>
  );
};

export default Webapps;
