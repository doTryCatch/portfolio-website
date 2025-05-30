// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,

const data = [
  {
    id: "python",
    label: "python",
    value: 20,
    color: "hsl(308, 70%, 50%)",
  },

  {
    id: "Javascript",
    label: "Javascript",
    value: 50,
    color: "hsl(310, 70%, 50%)",
  },
  {
    id: "Typescript",
    label: "Ts",
    value: 10,
    color: "hsl(119, 70%, 50%)",
  },
  {
    id: "HTML",
    label: "HTML",
    value: 10,
    color: "hsl(163, 90%, 50%)",
  },
  {
    id: "CSS",
    label: "CSS",
    value: 10,
    color: "hsl(163, 90%, 50%)",
  },
];
const MyResponsivePie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 20, bottom: 80, left: 20 }}
    innerRadius={0.45}
    padAngle={0.7}
    cornerRadius={5}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#fff "
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#fff",
              background: "#333",
            },
          },
        ],
      },
    ]}
    fill={[
      {
        match: {
          id: "Typescript",
        },
        id: "dots",
      },
      {
        match: {
          id: "SQL",
        },

        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "Javascript",
        },
        id: "dots",
      },
    ]}
    // legends={[
    //   {
    //     anchor: "bottom",
    //     direction: "row",
    //     justify: false,
    //     translateX: 0,
    //     translateY: 56,
    //     itemsSpacing: 0,
    //     itemWidth: 80,
    //     itemHeight: 18,
    //     itemTextColor: "#999",
    //     itemDirection: "left-to-right",
    //     itemOpacity: 1,
    //     symbolSize: 18,
    //     symbolShape: "circle",
    //     effects: [
    //       {
    //         on: "hover",
    //         style: {
    //           itemTextColor: "#fff",
    //         },
    //       },
    //     ],
    //   },
    // ]}
  />
);
export default MyResponsivePie;
