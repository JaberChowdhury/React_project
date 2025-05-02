import React, { useEffect, useState } from "react";

export type ColumnChartProps = {
  datas: {
    count: number[];
    characters: string[];
  };
  title?: string;
};

const ColumnChartComponent = ({ datas, title }: ColumnChartProps) => {
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
      type: "bar",
      height: 350,
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
      formatter: function (val: number) {
        return val + "";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: datas.characters,
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
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
    title: {
      text: title || "",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  if (!ApexChart) return <div>Loading Column Chart...</div>;

  return (
    <ApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default ColumnChartComponent;
