import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import loadCityList from "../utils/cityLoader";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: state.selectProps.w,
    minWidth: state.selectProps.minW,
  }),
};

const SearchCityAutocomplete = ({
  selectValue,
  setSelectValue,
  inputValue,
  onInputChangeRaw,
}) => {
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
