import React, { useEffect, useState } from "react";
// import useTextAnalyzer from "~/store/useTextAnalyzer";

export type propsType = {
  datas: {
    count: number[];
    characters: string[];
  };
};
const ChartComponent = ({ datas }: propsType) => {
  const [ApexChart, setApexChart] = useState<any>(null);
  // const { getCharacterFrequenciesArray } = useTextAnalyzer();

  // const text_analysis_data = getCharacterFrequenciesArray();

  // const datas = {
  //   count: text_analysis_data.map((item) => item.count),
  //   characters: text_analysis_data.map((item) => item.item),
  // };

  useEffect(() => {
    // Only import on client
    import("react-apexcharts").then((mod) => {
      setApexChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "text analysis ",
      data: datas.count,
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },

    labels: datas.characters,
    xaxis: { type: "ABC" },
    yaxis: { opposite: false },
    legend: { horizontalAlign: "left" },
  };

  if (!ApexChart) return <div>Loading..........</div>;

  return (
    <ApexChart options={options} series={series} type="area" height={350} />
  );
};

export default ChartComponent;
