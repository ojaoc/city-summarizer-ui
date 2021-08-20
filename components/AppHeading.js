import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const AppHeading = () => {
  return (
    <>
      <Heading mb={4}>City Summarizer</Heading>
      <Text color="gray" mb={8}>
        An useful app to obtain information about any city
      </Text>
    </>
  );
};

export default AppHeading;
