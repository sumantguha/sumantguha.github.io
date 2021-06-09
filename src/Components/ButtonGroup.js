import React from 'react';
import { IconButton } from '@chakra-ui/react';

const ButtonGroup = ({ props, bg, name }) => {
  return (
    <IconButton
      transition="0.3s"
      _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}
      _active={{ transform: 'scale(0.9)', transition: '0.3s' }}
      mt="10"
      size="lg"
      p="5"
      // colorScheme={bg}
      fontSize="30px"
      icon={name}
      mr="2rem"
      variant="ghost"
      borderWidth="2px"
      borderColor={bg}
      color={bg}
      {...props}
    />
  );
};

export default ButtonGroup;
