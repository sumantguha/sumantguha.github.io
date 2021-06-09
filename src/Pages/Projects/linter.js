import React from 'react';
import {
  Box,
  ModalBody,
  Button,
  Link,
  useColorModeValue,
  Heading,
  Code,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { BsPlay, BsFileEarmarkCode } from 'react-icons/bs';

const Linter = props => {
  const firstColor = useColorModeValue('red', 'yellow');
  const secondColor = useColorModeValue('blue.600', 'yellow.200');
  return (
    <Box mt={2} {...props}>
      <ModalBody>
        <Button
          mr={5}
          leftIcon={<BsFileEarmarkCode />}
          colorScheme="blue"
          size="lg"
        >
          <Link
            as="a"
            _hover={{ textDecor: 'none' }}
            href="https://github.com/sumantguha/Java-Style-Checker"
            isExternal={true}
          >
            View Source Code
          </Link>
        </Button>
        <Button
          leftIcon={<BsPlay />}
          colorScheme={firstColor}
          size="lg"
          disabled={true}
        >
          Try Now (Coming Soon!)
        </Button>
        <br />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Development Frameworks:
        </Heading>
        <Code children="Python" mr={2} />
        <Code children="React.js" mr={2} />
        <Code children="Flask" mr={2} />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Design Frameworks:
        </Heading>
        <Code children="Figma" />
        <br />
        <br />
        Designed specifically for the introductory computer science series at
        the University of Washington, I worked to develop a Java specific code
        quality linter (similar to{' '}
        <Link
          color={secondColor}
          as="a"
          href="https://pep8.readthedocs.io/en/release-1.7.x/"
          isExternal={true}
        >
          pep8
        </Link>
        ). The linter parses <Code>.java</Code> files to find stylystic errors
        in a program and gives users a report of these errors with suggestions
        on fixing them. There is a corresponding text based checker for the
        webapp to display results on a student interface for ease of grading.
        The goal of such a style checker is to ensure that code aligns with our
        specific{' '}
        <Link
          color={secondColor}
          as="a"
          href="https://courses.cs.washington.edu/courses/cse142/20au/quality.html"
          isExternal={true}
        >
          code quality guide
        </Link>
        . This in turn enforces:
        <br />
        <br />
        <UnorderedList pl={10}>
          <ListItem>
            Consistent stylstic practices amongst the large (~900 person) class
          </ListItem>
          <ListItem>
            Accurate style conventions from the{' '}
            <Link
              color={secondColor}
              as="a"
              href="https://docs.oracle.com/javase/specs/"
              isExternal={true}
            >
              Java Lanuage Specification
            </Link>{' '}
            to maintain across industry
          </ListItem>
        </UnorderedList>
      </ModalBody>
    </Box>
  );
};

export default Linter;
