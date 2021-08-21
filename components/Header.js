import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";

const colorModeIcons = {
  light: <HiMoon />,
  dark: <HiSun />,
};

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid #CDCDCD"
      position="fixed"
      w="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding={4}
        w="100%"
        maxW="container.xl"
      >
        <Heading size="sm">
          Made by João Correia{" "}
          <IconButton
            aria-label="github-link"
            icon={<AiOutlineGithub />}
            onClick={() => (window.location.href = "https://github.com/ojaoc")}
            fontSize="1.3em"
            mx={3}
          />
          <IconButton
            aria-label="linkedin-link"
            icon={<AiFillLinkedin />}
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/joaoafonsocorreia/")
            }
            fontSize="1.3em"
            ml={2}
            mr={3}
          />
        </Heading>
        <IconButton
          aria-label="toggle-dark-mode"
          icon={colorModeIcons[colorMode]}
          onClick={toggleColorMode}
          fontSize="1.3em"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
