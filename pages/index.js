import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import AppHeading from "../components/AppHeading";
import SearchCityAutocomplete from "../components/SearchCityAutocomplete";
import CityTemperaturesBarChart from "../components/CityTemperaturesBarChart";
import cityDetailsLoader from "../utils/cityDetailsLoader";
import { motion } from "framer-motion";
import Head from "next/head";
import CityDetailsTable from "../components/CityDetailsTable";

// eslint-disable-next-line react/display-name
const FlexForMotion = React.forwardRef((props, ref) => (
  <Flex {...props} ref={ref} />
));

const MotionComponent = motion(FlexForMotion);

const Index = () => {
  const [selectValue, setSelectValue] = useState([]);
  const [inputValue, onInputChangeRaw] = useState("");
  const [cityDetailsData, setCityDetailsData] = useState([]);

  const selectValueAsString = JSON.stringify(selectValue);

  useEffect(() => {
    async function setCityData() {
      const cityDetails = await cityDetailsLoader(
        selectValue.map(({ value }) => value)
      );
      setCityDetailsData(cityDetails);
    }
    setCityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValueAsString]);

  return (
    <>
      <Head>
        <title>City Summarizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          maxW="container.xl"
          direction="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <MotionComponent
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: selectValue.length > 0 ? "-1.5vh" : "19vh",
            }}
          >
            <AppHeading />
            <SearchCityAutocomplete
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              inputValue={inputValue}
              onInputChangeRaw={onInputChangeRaw}
            />
          </MotionComponent>
          {/* This ZIndex condition is under here because the bar chart 
          was overlaying the autocomplete menu */}
          <Flex h="45vh" w="100%">
            <Flex w="55%" zIndex={inputValue ? -1 : undefined}>
              {selectValue.length > 0 && (
                <CityTemperaturesBarChart data={cityDetailsData} />
              )}
            </Flex>
            <Box w="45%" pt={6}>
              {selectValue.length > 0 && (
                <CityDetailsTable detailsList={cityDetailsData} />
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
