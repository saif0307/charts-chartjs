"use client";
import { Bubble } from "react-chartjs-2";
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

const BubbleChart = () => {
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
        label: "Piso" + "   ",
        data: [
            {
              "x": 20,
              "y": 30,
              "r": 15
            },
            {
              "x": 40,
              "y": 10,
              "r": 10
            },
            {
              "x": 35,
              "y": 25,
              "r": 20
            },
            {
              "x": 50,
              "y": 40,
              "r": 12
            },
            {
              "x": 15,
              "y": 20,
              "r": 18
            },
            {
              "x": 25,
              "y": 35,
              "r": 14
            },
            {
              "x": 45,
              "y": 15,
              "r": 8
            },
            {
              "x": 30,
              "y": 50,
              "r": 16
            },
            {
              "x": 55,
              "y": 45,
              "r": 22
            },
            {
              "x": 10,
              "y": 5,
              "r": 25
            }
          ],
        borderColor: ["#3929FA"],
        backgroundColor: ["#3929FA"],
        pointBackgroundColor: ["#3929FA"],
        pointBorderColor: ["#3929FA"],
        borderWidth: 2,
      },
      {
        label: "Oficina" + "   ",
        data: [
            {
              "x": 25,
              "y": 40,
              "r": 12
            },
            {
              "x": 35,
              "y": 20,
              "r": 8
            },
            {
              "x": 15,
              "y": 30,
              "r": 15
            },
            {
              "x": 45,
              "y": 10,
              "r": 10
            },
            {
              "x": 20,
              "y": 25,
              "r": 18
            }
          ],
        borderColor: ["#FF9F20"],
        backgroundColor: ["#FF9F20"],
        pointBackgroundColor: ["#FF9F20"],
        pointBorderColor: ["#FF9F20"],
        borderWidth: 2,
      },
      {
        label: "Local Comercial" + "   ",
        data: [
            {
              "x": 15,
              "y": 25,
              "r": 10
            },
            {
              "x": 20,
              "y": 30,
              "r": 8
            }
          ],
        borderColor: ["#F460FF"],
        backgroundColor: ["#F460FF"],
        pointBackgroundColor: ["#F460FF"],
        pointBorderColor: ["#F460FF"],
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
              return "00"+ "   ";
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
      <Bubble data={data} height={592} width={600} options={options} />
    </div>
  );
};

export default BubbleChart;
