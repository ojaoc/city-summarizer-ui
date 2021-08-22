import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiSunset } from "react-icons/wi";

const icons = [
  [BsSearch, "Look up city"],
  [FaTemperatureHigh, "Temperature"],
  [WiSunset, "Sunset/Sunrise"],
];

// eslint-disable-next-line react/display-name
const FlexForMotion = React.forwardRef((props, ref) => (
  <Flex {...props} ref={ref} />
));

const MotionComponent = motion(FlexForMotion);

const IconWalkthrough = () => {
  const customStyle = {
    fontSize: "2em",
  };
  return (
    <MotionComponent
      w="100%"
      alignItems="center"
      justifyContent="space-around"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: "-5em",
      }}
    >
      {icons.map(([Icon, label], index) => (
        <Stack key={index} textAlign="center" direction="column">
          <Box padding="3em" border="2px solid gray" borderRadius="50%">
            <Icon style={customStyle} />
          </Box>
          <Text as="b">{label}</Text>
        </Stack>
      ))}
    </MotionComponent>
  );
};

export default IconWalkthrough;
