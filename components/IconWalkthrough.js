import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiSunset } from "react-icons/wi";

const icons = [
  [BsSearch, "Look up city"],
  [FaTemperatureHigh, "Temperature"],
  [WiSunset, "Sunset/Sunrise"],
];

const IconWalkthrough = () => {
  const customStyle = {
    fontSize: "2em",
  };
  return (
    <Flex w="100%" alignItems="center" justifyContent="space-around">
      {icons.map(([Icon, label], index) => (
        <Stack
          key={index}
          textAlign="center"
          direction="column"
          transform="translateY(-5em)"
        >
          <Box padding="3em" border="2px solid gray" borderRadius="50%">
            <Icon style={customStyle} />
          </Box>
          <Text as="b">{label}</Text>
        </Stack>
      ))}
    </Flex>
  );
};

export default IconWalkthrough;
