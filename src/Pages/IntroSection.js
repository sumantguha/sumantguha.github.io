import React from 'react';
import {
  useColorModeValue,
  Box,
  Heading,
  Text,
  Fade,
  Collapse,
} from '@chakra-ui/react';
import ButtonGroup from '../Components/ButtonGroup';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMailBulk,
} from 'react-icons/fa';

const IntroSection = ({ heading, buttons }) => {
  const color = useColorModeValue('blue.600', 'yellow.200');
  const highlightColor = useColorModeValue('red.500', 'blue.200');
  return (
    <Box>
      <Box maxW="100%" pl={20} ml={10} pr={20} mr={10} textAlign="center">
        <Collapse startingHeight={20} in={heading}>
          <Box mb="4">
            <Heading fontSize="8xl" color={color}>
              Creating and developing{' '}
              <Text display="inline-block" color={highlightColor}>
                high quality
              </Text>{' '}
              content for the internet world
            </Heading>
          </Box>
        </Collapse>
        <Fade in={heading}>
          <Box mt="4">
            <Text
              textTransform="uppercase"
              letterSpacing="0.2rem"
              fontSize="xl"
              fontWeight="400"
            >
              Sumant Guha
            </Text>
          </Box>
        </Fade>
      </Box>
      <Fade in={buttons}>
        <Box w="100%" textAlign="center">
          <ButtonGroup bg={color} name={<FaFacebookF />} />
          <ButtonGroup bg={color} name={<FaLinkedinIn />} />
          <ButtonGroup bg={color} name={<FaGithub />} />
          <ButtonGroup bg={color} name={<FaMailBulk />} />
        </Box>
      </Fade>
    </Box>
  );
};

export default IntroSection;
