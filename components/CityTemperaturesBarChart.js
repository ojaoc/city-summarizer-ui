import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useColorModeValue } from "@chakra-ui/react";

const paddingArr = [0.7, 0.5];

const CityTemperaturesBarChart = ({ data }) => {
  const textColor = useColorModeValue("#333333", "#A0AEC0");
  const tooltipTextColor = useColorModeValue("#333333", "#FFF");
  const strokeColor = useColorModeValue("#E2E8F0", "#303541");
  const bg = useColorModeValue("#FFF", "#1A1F2C");
  const barColor = useColorModeValue("#d4f2ff", "#3d5a80");
  const strokebarColor = useColorModeValue("#E2E8F0", "#808080");

  return (
    <ResponsiveBar
      data={data}
      keys={["temp"]}
      indexBy="city"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "City",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Temp (Cº)",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      margin={{
        top: 50,
        right: 60,
        bottom: 50,
        left: 60,
      }}
      padding={paddingArr[data.length - 1] ?? 0.3}
      colors={barColor}
      borderWidth="1px"
      borderColor={strokebarColor}
      colorBy="temp"
      theme={{
        textColor,
        grid: {
          line: {
            stroke: strokeColor,
          },
        },
        labels: {
          text: {
            fill: textColor,
          },
        },
        tooltip: {
          container: {
            backgroundColor: bg,
            color: tooltipTextColor,
          },
        },
      }}
    />
  );
};

export default CityTemperaturesBarChart;
