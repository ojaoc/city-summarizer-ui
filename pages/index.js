import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { AsyncPaginate } from "react-select-async-paginate";

const quantPerPage = 10;

const loadCityList = async (search, loadedOptions, { page }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/city/list?q=${search}&offset=${loadedOptions.length}`
  ).then((r) => r.json());

  return {
    options: response.data,
    hasMore:
      loadedOptions.length + quantPerPage <= response.metadata.totalCount,
    additional: {
      page: page + 1,
    },
  };
};

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: state.selectProps.w,
    minWidth: state.selectProps.minW,
  }),
};

const Index = () => {
  const [selectValue, setSelectValue] = useState([]);

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
          <Heading mb={4}>City Summarizer</Heading>
          <Text color="gray" mb={8}>
            An useful app to obtain information about any city
          </Text>
          <AsyncPaginate
            value={selectValue}
            loadOptions={loadCityList}
            onChange={setSelectValue}
            aditional={{
              page: 1,
            }}
            styles={customStyles}
            w="55%"
            minW="360px"
            isMulti
            closeMenuOnSelect={false}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
