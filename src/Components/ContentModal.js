import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

import TA from '../Pages/Experience/ta';
import EY from '../Pages/Experience/ey';
import Robotics from '../Pages/Experience/robotics';
import MuSigma from '../Pages/Experience/musigma';

import CodeIt from '../Pages/Projects/codeit';
import Webapps from '../Pages/Projects/webapps';
import Linter from '../Pages/Projects/linter';
import Ed from '../Pages/Projects/ed';
import Maps from '../Pages/Projects/maps';
import Portfolio from '../Pages/Projects/portfolio2';

const pageHandler = {
  'CSE 14x Head Teaching Assistant': <TA />,
  'Machine Learning Intern': <EY />,
  'Code.it': <CodeIt />,
  'Nifty Web Apps': <Webapps />,
  'Java Code Quality Linter': <Linter />,
  'Course Data Migration': <Ed />,
  'Husky Maps': <Maps />,
  'Portfolio version 2': <Portfolio />,
  'Embedded Systems Programmer': <Robotics />,
  'Data Analytics Intern': <MuSigma />,
};

const ContentModal = ({
  props,
  onClose,
  isOpen,
  title,
  description,
  start,
  end,
}) => {
  const bg = useColorModeValue('white', 'gray.900');
  return (
    <Modal
      {...props}
      onClose={onClose}
      size="6xl"
      isOpen={isOpen}
      justifyContent="center"
      alignItems="center"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalOverlay />
      <ModalContent bg={bg}>
        <ModalHeader fontSize="5xl" fontWeight={700}>
          {title}
          <Text
            fontSize="md"
            textTransform="uppercase"
            letterSpacing="0.2rem"
            mt={1}
          >
            {description === undefined ? '' : `${description} |`} {start}{' '}
            {end === null ? '' : `- ${end}`}
          </Text>
        </ModalHeader>
        <Divider colorScheme="blue" orientation="horizontal" />

        <ModalCloseButton />
        <ModalBody fontWeight={400}>{pageHandler[title]}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContentModal;
