import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import AppHeading from "../components/AppHeading";
import SearchCityAutocomplete from "../components/SearchCityAutocomplete";

const Index = () => {
  return (
    <>
      <Header />
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          maxW="container.lg"
          direction="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <AppHeading />
          <SearchCityAutocomplete />
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
