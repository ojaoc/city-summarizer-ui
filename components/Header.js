import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";

const colorModeIcons = {
  light: <MoonIcon />,
  dark: <SunIcon />,
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
        maxW="container.lg"
      >
        <Heading size="sm">City Summarizer</Heading>
        <IconButton
          aria-label="toggle-dark-mode"
          icon={colorModeIcons[colorMode]}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
