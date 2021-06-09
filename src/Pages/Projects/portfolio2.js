import React from 'react';
import {
  Box,
  ModalBody,
  Button,
  Heading,
  Link,
  Code,
  Image,
} from '@chakra-ui/react';
import { BsFileEarmarkCode } from 'react-icons/bs';
import OldPortfolio from '../../images/oldportfolio.png';

const Portfolio = props => {
  return (
    <Box {...props}>
      <ModalBody>
        <Button leftIcon={<BsFileEarmarkCode />} colorScheme="blue" size="lg">
          <Link
            as="a"
            _hover={{ textDecor: 'none' }}
            href="https://github.com/sumantguha/portfolio"
            isExternal={true}
          >
            View Source Code
          </Link>
        </Button>
        <br />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Design Frameworks:
        </Heading>
        <Code children="Figma" mr={2} />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Development Frameworks:
        </Heading>
        <Code children="React.js" mr={2} />
        <br />
        <br />
        An older version of this website! Not hosted anywhere but feel free to
        look through the source code. Designed natively in{' '}
        <Code children="React.js" /> with Bootstrap 4 and UI kits.
        <br />
        <br />
        <Image src={OldPortfolio} />
      </ModalBody>
    </Box>
  );
};

export default Portfolio;
