import React from 'react';
import { DoubleBounce } from 'better-react-spinkit';
import { Box, Text, Center, useColorModeValue } from '@chakra-ui/react';

const Loader = props => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('#E53E3E', '#90CDF4');
  return (
    <Box
      {...props}
      bg={bg}
      position="absolute"
      top={0}
      left={0}
      h="100vh"
      w="100%"
    >
      <Center h="100%" position="absolute" mx="auto" w="100%">
        <DoubleBounce size={100} color={color} />
      </Center>
      <Box position="absolute" bottom={0} marginBottom="2%" marginLeft="2%">
        <Text
          fontWeight="200"
          fontSize="2rem"
          textTransform="uppercase"
          letterSpacing="0.1rem"
        >
          Welcome,
        </Text>
        <Text fontWeight="700" fontSize="4rem">
          Wait for a bit
        </Text>
      </Box>
    </Box>
  );
};

export default Loader;
