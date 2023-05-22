"use client";
import { Line } from "react-chartjs-2";
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

const LineChart = () => {
  const [is2xl, setIs2xl] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1236) {
      setIs2xl(true);
    }
  }, []);

  const data = {
    labels: ["January", "April", "July", "October", ""],
    datasets: [
      {
        label: "Sales for 2020 (M)" + "   ",
        data: [3, 2, 2, 1, 5, 6, 7, 8, 9],
        borderColor: ["#72E249"],
        backgroundColor: ["#72E249"],
        pointBackgroundColor: ["#72E249"],
        pointBorderColor: ["#72E249"],
        borderWidth: 2,
      },
      {
        label: "Sales for 2019 (M)" + "   ",
        data: [1, 3, 2, 2, 3, 5, 4, 6, 7],
        borderColor: ["#1BDCDF"],
        backgroundColor: ["#1BDCDF"],
        pointBackgroundColor: ["#1BDCDF"],
        pointBorderColor: ["#1BDCDF"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
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
          display: true,
        },

        border: {
          dash: [5, 5],
          display: false,
        },
        ticks: {
          callback: function (value) {
            return "       " + this.getLabelForValue(value);
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
              return "";
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
    <div className="max-w-[904px] h-[590px]">
      <Line data={data} height={592} width={600} options={options} />
    </div>
  );
};

export default LineChart;
