import React, { useEffect, useState } from "react";

export type PieChartProps = {
  datas: {
    count: number[];
    characters: string[];
  };
  title?: string;
};

const PieChartComponent = ({ datas, title }: PieChartProps) => {
  const [ApexChart, setApexChart] = useState<any>(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setApexChart(() => mod.default);
    });
  }, []);

  const series = datas.count;

  const options = {
    chart: {
      type: "pie",
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

  if (!ApexChart) return <div>Loading Pie Chart...</div>;

  return (
    <ApexChart options={options} series={series} type="pie" height={350} />
  );
};

export default PieChartComponent;
