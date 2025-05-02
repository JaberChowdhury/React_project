import React, { useEffect, useState } from "react";

export type RadarChartProps = {
  datas: {
    count: number[];
    characters: string[];
  };
  title?: string;
};

const RadarChartComponent = ({ datas, title }: RadarChartProps) => {
  const [ApexChart, setApexChart] = useState<any>(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setApexChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Value",
      data: datas.count,
    },
  ];

  const options = {
    chart: {
      type: "radar",
      height: 350,
    },
    labels: datas.characters,
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts: any) {
        return (
          opts.w.globals.labels[opts.seriesIndex] +
          ": " +
          opts.w.globals.series[opts.seriesIndex]
        );
      },
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    legend: {
      position: "bottom",
    },
    title: {
      text: title || "",
      floating: true,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  if (!ApexChart) return <div>Loading Radar Chart...</div>;

  return (
    <ApexChart options={options} series={series} type="radar" height={350} />
  );
};

export default RadarChartComponent;
