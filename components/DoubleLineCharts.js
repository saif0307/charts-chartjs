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



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DoubleLineChart = () => {
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
        borderColor: ["#A160F1"],
        backgroundColor: ["#A160F1"],
        pointBackgroundColor: ["#A160F1"],
        pointBorderColor: ["#A160F1"],
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
        display:false,
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
            return "    " + this.getLabelForValue(value);
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
              return "00" + "M" + "   ";
            }
            return value + "M" + "   ";
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
    <div className="max-w-[904px]  w-full h-[590px]">
<div className="flex items-center gap-6">

{
            data.datasets.map((item) => {
                return (
                    <div className="flex items-center gap-[7px] ">
                        <div className=" rounded-full h-3 w-3" style={{
                            backgroundColor: item.backgroundColor
                        }}></div>
                        <p className="capitalize text-xs font-normal leading-[18px] text-[#616161]">{item.label}</p>
                        </div>
                )
            })
        }
</div>
       <div className="w-full flex items-center mt-5">
    <div className="w-1/2">
    <h1 className="text-[25px] leading-[33px] font-normal tracking-[-0.02em] text-[#0E0B13]">Demand</h1>
    <div className="">
     <Line data={data} height={592} width={600} options={options} />
     </div>
       </div>
       <div className="w-1/2">
    <h1 className="text-[25px] leading-[33px] font-normal tracking-[-0.02em] text-[#0E0B13]">Supply</h1>
    <div className="">
     <Line data={data} height={592} width={600} options={options} />
     </div>
       </div>
    </div>
   
    </div>
  );
};

export default DoubleLineChart;
