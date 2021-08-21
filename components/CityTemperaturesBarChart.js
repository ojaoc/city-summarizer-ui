import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const paddingArr = [0.7, 0.5];

const CityTemperaturesBarChart = ({ data }) => (
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
    colors={{ scheme: "nivo" }}
    colorBy="temp"
  />
);

export default CityTemperaturesBarChart;
