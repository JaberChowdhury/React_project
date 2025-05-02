import React, { useEffect, useState } from "react";

export type MixedChartProps = {
  datas: {
    count: number[];
    characters: string[];
  };
  title?: string;
};

const MixedChartComponent = ({ datas, title }: MixedChartProps) => {
  const [ApexChart, setApexChart] = useState<any>(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setApexChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Column",
      type: "column",
      data: datas.count,
    },
    {
      name: "Line",
      type: "line",
      data: datas.count,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      formatter: function (val: number) {
        return val + "";
      },
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    labels: datas.characters,
    xaxis: {
      categories: datas.characters,
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: number) {
          return val + "";
        },
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

  if (!ApexChart) return <div>Loading Mixed Chart...</div>;

  return (
    <ApexChart options={options} series={series} type="line" height={350} />
  );
};

export default MixedChartComponent;
