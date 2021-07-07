import React, { useState } from "react";
import {
  Flex,
  Center,
  useColorModeValue,
  Spacer,
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import PDF from "react-pdf-js";

import Resume from "../Resume.pdf";

import { ColorModeSwitcher } from "../App.js";

const Navbar = (props) => {
  const bg = useColorModeValue("blue.600", "yellow.200");
  const color = useColorModeValue("gray.900", "gray.50");

  const modalbg = useColorModeValue("white", "gray.900");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  const onDocumentError = (err) => {
    console.error("pdf viewer error:", err);
  };
  const onDocumentComplete = (numPages) => {
    setPages(numPages);
  };

  return (
    <Flex px="20" py="10" w="100%" {...props}>
      <Button
        fontSize="xl"
        fontWeight="700"
        mr={10}
        transition="0.3s"
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        variant="outline"
        borderWidth="2px"
        borderColor={bg}
        size="md"
        color={color}
        onClick={onOpen}
      >
        Resume
      </Button>
      <Spacer />
      <Center>
        <Link
          href="#about"
          color={color}
          fontSize="2xl"
          fontWeight={700}
          mr={10}
        >
          About
        </Link>
        <Link
          href="#projects"
          color={color}
          fontSize="2xl"
          fontWeight={700}
          mr={10}
        >
          Projects
        </Link>
        <Link
          href="#experience"
          color={color}
          fontSize="2xl"
          fontWeight={700}
          mr={10}
        >
          Work
        </Link>
        <ColorModeSwitcher />
        <Modal
          display="flex"
          alignItems="center"
          justifyContent="center"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalOverlay />
          <ModalContent bg={modalbg}>
            <PDF
              file={Resume}
              page={page}
              onDocumentError={onDocumentError}
              onDocumentComplete={onDocumentComplete}
            />
          </ModalContent>
        </Modal>
      </Center>
    </Flex>
  );
};

export default Navbar;
