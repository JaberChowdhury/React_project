import React, { useEffect, useState } from "react";

export type MultiRadialBarChartProps = {
  datas: {
    count: number[];
    characters: string[];
  };
  title?: string;
  startAngle?: number;
  endAngle?: number;
};

const MultiRadialBarChartComponent = ({
  datas,
  title,
  startAngle = -135,
  endAngle = 135,
}: MultiRadialBarChartProps) => {
  const [ApexChart, setApexChart] = useState<any>(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setApexChart(() => mod.default);
    });
  }, []);

  const series = datas.count;

  const options = {
    chart: {
      type: "radialBar",
      height: 350,
    },
    plotOptions: {
      radialBar: {
        startAngle,
        endAngle,
        dataLabels: {
          name: {
            fontSize: "16px",
          },
          value: {
            fontSize: "14px",
            formatter: function (val: number) {
              return val + "";
            },
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return series.reduce((a: number, b: number) => a + b, 0) + "";
            },
          },
        },
      },
    },
    labels: datas.characters,
    legend: {
      show: true,
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

  if (!ApexChart) return <div>Loading Multi RadialBar Chart...</div>;

  return (
    <ApexChart
      options={options}
      series={series}
      type="radialBar"
      height={350}
    />
  );
};

export default MultiRadialBarChartComponent;
