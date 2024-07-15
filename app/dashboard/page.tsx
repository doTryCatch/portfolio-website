"use client";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Data: {}[] = [
  {
    country: "AD",
    "hot dog": 132,
    "hot dogColor": "hsl(234, 70%, 50%)",
    burger: 11,
    burgerColor: "hsl(293, 70%, 50%)",
    sandwich: 129,
    sandwichColor: "hsl(131, 70%, 50%)",
    kebab: 192,
    kebabColor: "hsl(39, 70%, 50%)",
    fries: 58,
    friesColor: "hsl(16, 70%, 50%)",
    donut: 179,
    donutColor: "hsl(313, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 155,
    "hot dogColor": "hsl(58, 70%, 50%)",
    burger: 92,
    burgerColor: "hsl(53, 70%, 50%)",
    sandwich: 127,
    sandwichColor: "hsl(109, 70%, 50%)",
    kebab: 153,
    kebabColor: "hsl(166, 70%, 50%)",
    fries: 195,
    friesColor: "hsl(129, 70%, 50%)",
    donut: 94,
    donutColor: "hsl(166, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 147,
    "hot dogColor": "hsl(30, 70%, 50%)",
    burger: 121,
    burgerColor: "hsl(137, 70%, 50%)",
    sandwich: 96,
    sandwichColor: "hsl(4, 70%, 50%)",
    kebab: 95,
    kebabColor: "hsl(159, 70%, 50%)",
    fries: 150,
    friesColor: "hsl(301, 70%, 50%)",
    donut: 136,
    donutColor: "hsl(326, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 81,
    "hot dogColor": "hsl(329, 70%, 50%)",
    burger: 112,
    burgerColor: "hsl(311, 70%, 50%)",
    sandwich: 176,
    sandwichColor: "hsl(352, 70%, 50%)",
    kebab: 19,
    kebabColor: "hsl(338, 70%, 50%)",
    fries: 20,
    friesColor: "hsl(357, 70%, 50%)",
    donut: 37,
    donutColor: "hsl(296, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 136,
    "hot dogColor": "hsl(162, 70%, 50%)",
    burger: 134,
    burgerColor: "hsl(305, 70%, 50%)",
    sandwich: 41,
    sandwichColor: "hsl(132, 70%, 50%)",
    kebab: 137,
    kebabColor: "hsl(325, 70%, 50%)",
    fries: 93,
    friesColor: "hsl(342, 70%, 50%)",
    donut: 82,
    donutColor: "hsl(55, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 68,
    "hot dogColor": "hsl(279, 70%, 50%)",
    burger: 13,
    burgerColor: "hsl(52, 70%, 50%)",
    sandwich: 24,
    sandwichColor: "hsl(297, 70%, 50%)",
    kebab: 193,
    kebabColor: "hsl(145, 70%, 50%)",
    fries: 177,
    friesColor: "hsl(46, 70%, 50%)",
    donut: 194,
    donutColor: "hsl(3, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 23,
    "hot dogColor": "hsl(2, 70%, 50%)",
    burger: 137,
    burgerColor: "hsl(39, 70%, 50%)",
    sandwich: 139,
    sandwichColor: "hsl(290, 70%, 50%)",
    kebab: 49,
    kebabColor: "hsl(217, 70%, 50%)",
    fries: 2,
    friesColor: "hsl(307, 70%, 50%)",
    donut: 111,
    donutColor: "hsl(197, 70%, 50%)",
  },
];
const MyResponsiveBar = ({ data /* see data tab */ }: any) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    }
  />
);
function Dashboard() {
  return (
    <>
      <div className="container h-64 w-[50%]">
        <div className="text-white">Dashboard</div>;
        <MyResponsiveBar data={Data} />
      </div>
    </>
  );
}

export default Dashboard;
