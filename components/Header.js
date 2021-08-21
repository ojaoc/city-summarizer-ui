import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
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
      borderBottom="1px solid"
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
        <Heading size="sm">Made by João Correia</Heading>
        <IconButton
          aria-label="toggle-dark-mode"
          icon={colorModeIcons[colorMode]}
          onClick={toggleColorMode}
          fontSize="1.2em"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
