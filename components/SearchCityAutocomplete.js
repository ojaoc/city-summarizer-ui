import { useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import loadCityList from "../utils/cityLoader";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: state.selectProps.w,
    minWidth: state.selectProps.minW,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
  }),
  input: (provided, state) => ({
    ...provided,
    color: state.selectProps.color,
  }),
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.color,
    backgroundColor: state.selectProps.bg,
  }),
  option: (provided, { isFocused, selectProps }) => ({
    ...provided,
    backgroundColor: isFocused ? selectProps.optionBg : "",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: state.selectProps.labelMultiBg,
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: state.selectProps.labelMultiColor,
  }),
};

const SearchCityAutocomplete = ({
  selectValue,
  setSelectValue,
  inputValue,
  onInputChangeRaw,
}) => {
  const color = useColorModeValue("#333333", "#FFF");
  const bg = useColorModeValue("#FFF", "#1A1F2C");
  const optionBg = useColorModeValue("#dbecfe", "#2684ff");
  const labelMultiBg = useColorModeValue("#E6E6E6", "#808080");
  const labelMultiColor = useColorModeValue("#333", "#FFF");

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
    <AsyncPaginate
      cacheOptions
      value={selectValue}
      loadOptions={loadCityList}
      onChange={setSelectValue}
      styles={customStyles}
      w="55%"
      minW="360px"
      color={color}
      bg={bg}
      optionBg={optionBg}
      labelMultiBg={labelMultiBg}
      labelMultiColor={labelMultiColor}
      isMulti
      closeMenuOnSelect={false}
      placeholder="Search city..."
      inputValue={inputValue}
      onInputChange={onInputChange}
      menuIsOpen={inputValue !== ""}
    />
  );
};

export default SearchCityAutocomplete;
