import React, { useRef, useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  extendTheme,
  Text,
  Fade,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { FaMoon, FaSun } from "react-icons/fa";

import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./Components/Navbar";
import IntroSection from "./Pages/IntroSection";
import Footer from "./Components/Footer";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Pages/Loader";

import { CgMouse } from "react-icons/cg";
import Hamburger from "./Components/Hamburger";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F7FAFC", "#171923")(props),
        color: mode("#171923", "#F7FAFC")(props),
      },
    }),
  },
});

const App = () => {
  const myRef = useRef(null);
  const [isHidden, setIsHidden] = useState("visible");
  const [navbar, setNavbar] = useState(false);
  const [bubbles, setBubbles] = useState(false);
  const [intro, setIntro] = useState(false);
  const [buttons, setButtons] = useState(false);

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };

  const enableScroll = () => {
    window.onscroll = () => {};
  };

  useEffect(() => {
    disableScroll();
    setInterval(() => {
      enableScroll();
      setIsHidden("none");
    }, 2000);
    setInterval(() => {
      setNavbar(true);
    }, 2250);
    setInterval(() => {
      setIntro(true);
    }, 2750);
    setInterval(() => {
      setButtons(true);
    }, 3250);
    setInterval(() => {
      setBubbles(true);
    }, 4000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <AnimatedCursor
        innerSize={25}
        outerSize={20}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <Box>
        <Box
          m="0 auto 0 auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxW="100%"
          h="100vh"
          position="relative"
        >
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            bottom="2%"
            mx="auto"
            textAlign="center"
          >
            <Fade in={bubbles}>
              <IconButton
                transition="0.3s"
                _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
                icon={<CgMouse />}
                variant="none"
                fontSize="1.5rem"
                onClick={() =>
                  myRef.current.scrollIntoView({ behavior: "smooth" })
                }
              />
              <Text
                fontSize="sm"
                fontWeight={600}
                letterSpacing="0.05rem"
                textTransform="lowercase"
              >
                Scroll Down
              </Text>
            </Fade>
          </Box>

          <Box width="100%">
            <IntroSection heading={intro} buttons={buttons} />

            <Fade in={navbar}>
              <Navbar
                visibility={{ base: "hidden", xl: "visible" }}
                // display={{base: "none", md: "block"}}
                position="absolute"
                left="0"
                top="0"
              />
            </Fade>

            <Box visibility={{ base: "visible", xl: "hidden" }}>
              <ColorModeSwitcher position="absolute" m="5" top={0} left={0} />
              <Hamburger />
            </Box>
          </Box>
        </Box>
        <AboutMe scrollRef={myRef} />
        <Projects h="auto" pb="20" w="100%" />

        <Experience h="auto" pb="20" w="100%" />
        <Footer position="absolute" h="auto" left="0" bottom="0" pb={5} />
      </Box>

      <Loader display={isHidden} />
    </ChakraProvider>
  );
};

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="3xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default App;
