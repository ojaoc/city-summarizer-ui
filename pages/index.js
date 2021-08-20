import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import AppHeading from "../components/AppHeading";
import SearchCityAutocomplete from "../components/SearchCityAutocomplete";
import CityTemperaturesBarChart from "../components/CityTemperaturesBarChart";
import cityDetailsLoader from "../utils/cityDetailsLoader";
import { motion } from "framer-motion";

// eslint-disable-next-line react/display-name
const FlexForMotion = React.forwardRef((props, ref) => (
  <Flex {...props} ref={ref} />
));

const MotionComponent = motion(FlexForMotion);

const Index = () => {
  const [selectValue, setSelectValue] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  const selectValueAsString = JSON.stringify(selectValue);

  useEffect(() => {
    async function setCityData() {
      const cityDetails = await cityDetailsLoader(
        selectValue.map(({ value }) => value)
      );
      setBarChartData(cityDetails);
    }
    setCityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValueAsString]);

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
            />
          </MotionComponent>
          <Flex h="45vh" w="100%">
            {selectValue.length > 0 && (
              <CityTemperaturesBarChart data={barChartData} />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
