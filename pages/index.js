import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { AsyncPaginate } from "react-select-async-paginate";
import loadCityList from "../utils/cityLoader";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: state.selectProps.w,
    minWidth: state.selectProps.minW,
  }),
};

const Index = () => {
  const [selectValue, setSelectValue] = useState([]);
  const [inputValue, onInputChangeRaw] = useState("");
  const [inputHistory, setInputHistory] = useState([]);

  const onInputChange = (newInputValue, { action }) => {
    setInputHistory([
      ...inputHistory,
      {
        inputValue: newInputValue,
        action,
      },
    ]);

    onInputChangeRaw(newInputValue);
  };

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
            cacheOptions
            value={selectValue}
            loadOptions={loadCityList}
            onChange={setSelectValue}
            styles={customStyles}
            w="55%"
            minW="360px"
            isMulti
            closeMenuOnSelect={false}
            placeholder="Search city..."
            inputValue={inputValue}
            onInputChange={onInputChange}
            menuIsOpen={inputValue !== ""}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
