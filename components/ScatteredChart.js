"use client";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/AeonikMono-Regular.otf",
  display: "swap",
});

const legendMargin = {
  id: "legendMargin",
  beforeInit(chart, legend, options) {
    const fitValue = chart.legend.fit;

    chart.legend.fit = function () {
      fitValue.bind(chart.legend)();
      const legend = this;
      return (legend.height += 40);
    };
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  legendMargin
);

const ScatteredChart = () => {
  const [is2xl, setIs2xl] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1236) {
      setIs2xl(true);
    }
  }, []);

  const data = {
    datasets: [
      {
        label: "Sales for 2020 (M)" + "   ",
        data: [
          {
            "x": 10,
            "y": 20
          },
          {
            "x": 15,
            "y": 35
          },
          {
            "x": 20,
            "y": 45
          },
          {
            "x": 25,
            "y": 60
          },
          {
            "x": 30,
            "y": 55
          },
          {
            "x": 35,
            "y": 70
          },
          {
            "x": 40,
            "y": 75
          },
          {
            "x": 45,
            "y": 90
          },
          {
            "x": 50,
            "y": 85
          },
          {
            "x": 55,
            "y": 100
          },
          {
            "x": 60,
            "y": 95
          },
          {
            "x": 65,
            "y": 110
          },
          {
            "x": 70,
            "y": 105
          },
          {
            "x": 75,
            "y": 120
          },
          {
            "x": 80,
            "y": 115
          },
          {
            "x": 85,
            "y": 130
          },
          {
            "x": 90,
            "y": 125
          },
          {
            "x": 95,
            "y": 140
          },
          {
            "x": 100,
            "y": 135
          }
        ]
        ,
        borderColor: ["#72E249"],
        backgroundColor: ["#72E249"],
        pointBackgroundColor: ["#72E249"],
        pointBorderColor: ["#72E249"],
      },
      {
        label: "Sales for 2050 (M)" + "   ",
        data: [
          {"x": 12, "y": 45},
          {"x": 15, "y": 37},
          {"x": 18, "y": 52},
          {"x": 20, "y": 48},
          {"x": 22, "y": 55},
          {"x": 25, "y": 40},
          {"x": 28, "y": 50},
          {"x": 30, "y": 47},
          {"x": 32, "y": 58},
          {"x": 35, "y": 42},
          {"x": 38, "y": 53},
          {"x": 40, "y": 45},
          {"x": 42, "y": 60},
          {"x": 45, "y": 55},
          {"x": 48, "y": 43},
          {"x": 50, "y": 57},
          {"x": 52, "y": 49},
          {"x": 55, "y": 35},
          {"x": 58, "y": 42},
          {"x": 60, "y": 50}
        ]
        
        ,
        borderColor: ["#1BDCDF"],
        backgroundColor: ["#1BDCDF"],
        pointBackgroundColor: ["#1BDCDF"],
        pointBorderColor: ["#1BDCDF"],
      },
      {
        label: "Sales for 2050 (M)" + "   ",
        data: [
          {"x": 10, "y": 30},
          {"x": 11, "y": 32},
          {"x": 12, "y": 35},
          {"x": 13, "y": 28},
          {"x": 14, "y": 33},
          {"x": 15, "y": 31},
          {"x": 16, "y": 36},
          {"x": 17, "y": 29},
          {"x": 18, "y": 34},
          {"x": 19, "y": 32},
          {"x": 20, "y": 37},
          {"x": 21, "y": 30},
          {"x": 22, "y": 35},
          {"x": 23, "y": 33},
          {"x": 24, "y": 38},
          {"x": 25, "y": 31},
          {"x": 26, "y": 36},
          {"x": 27, "y": 34},
          {"x": 28, "y": 39},
          {"x": 29, "y": 32},
          {"x": 30, "y": 37},
          {"x": 31, "y": 35},
          {"x": 32, "y": 40},
          {"x": 33, "y": 33},
          {"x": 34, "y": 38},
          {"x": 35, "y": 36},
          {"x": 36, "y": 41},
          {"x": 37, "y": 34},
          {"x": 38, "y": 39},
          {"x": 39, "y": 37},
          {"x": 40, "y": 42}
        ]
        
        
        ,
        borderColor: ["#F06087"],
        backgroundColor: ["#F06087"],
        pointBackgroundColor: ["#F06087"],
        pointBorderColor: ["#F06087"],
      },
     
    ],
  };

  const options = {
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    maintainAspectRatio: is2xl ? false : true,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          boxHeight: 10,
          textAlign: "center",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#D3D3D3",
          drawTicks: false,
          display: false,
        },

        border: {
          dash: [5, 5],
          display: false,
        },
        ticks: {
          callback: function (value) {
            return "" + this.getLabelForValue(value);
          },
          padding: 12,
          color: "#0E0B13",
          font: {
            size: 12,
            style: "normal",
            family: myFont.style.fontFamily,
          },
        },
      },
      y: {
        
        beginAtZero: true,
        grid: {
          color: "#D3D3D3",
          drawTicks: false,
          display: true,
        },
        border: {
          dash: [5, 5],
          display: false,
        },
        ticks: {
          callback: function (value, asd, array, se) {
            // if it is first item return L
            if (value == array[0]?.value) {
              return "00" + "   ";
            }
            return value + "K" + "   ";
          },
          color: "#0E0B13",
          font: {
            size: 12,
            style: "normal",
            family: myFont.style.fontFamily,
          },
        },
      },
    },
  };

  return (
    <div className="max-w-[904px] mx-auto h-[590px]">
      <Scatter data={data} height={592} width={600} options={options} />
    </div>
  );
};

export default ScatteredChart;
