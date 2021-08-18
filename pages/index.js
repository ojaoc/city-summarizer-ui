import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <Flex
        h="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading mb={4}>City Summarizer</Heading>
        <Text color="gray">
          An useful app to obtain information about any city
        </Text>
      </Flex>
    </>
  );
};

export default Index;
