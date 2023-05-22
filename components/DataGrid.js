"use client";
import Arrow from "./ArrowIcon";

const data = [
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
  "96%",
];
const headings = ["-10%", "-5%", "0%", "5%", "10%"];
const sets = [
  {
    name: "Best Case",
    color: "#EA3EFF",
  },
  {
    name: "Median Case",
    color: "#842D8E",
  },
  {
    name: "Worst Case",
    color: "#FF0000",
  },
  {
    name: "Property of Interest",
    color: "#DD8A1C",
  },
];

function Index() {
  return (
    <>
      <div className="pl-5 pr-2">
        <div className="max-w-[920px] h-[590px] mx-auto mt-20   whitespace-nowrap">
          <div className="flex items-center gap-6">
            {sets.map((item) => {
              return (
                <div className="flex items-center gap-[7px] ">
                  <div
                    className=" rounded-full h-3 w-3"
                    style={{
                      backgroundColor: item.color,
                    }}
                  ></div>
                  <p className="capitalize text-xs font-normal leading-[18px] text-[#616161]">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="border-b mt-7  border-l  pt-4 border-[#0E0B13] border-dashed relative">
            <p className="absolute   leading-[18px] text-xs  whitespace-nowrap   w-fit h-fit -top-1 left-3 text-[#616161] ">
              ↓ Best Case ↓
            </p>
            <p className="absolute  -left-8 -rotate-90 w-10 leading-[18px] text-xs text-[#0E0B13] whitespace-nowrap inset-0  h-fit my-auto ">
              POTENTIAL RESULTS
            </p>
            <Arrow className={"absolute -top-[6px] -left-[4.5px]"} />
            <Arrow
              className={"absolute -bottom-[3px] rotate-90 -right-[7px]"}
            />

            <div className="overflow-auto">
              <div className="w-[904px]">
                <div>
                  <table className="w-full">
                    <tbody>
                      {data.map((item) => {
                        return (
                          <tr className="border-y border-r border-dashed border-[#616161]">
                            {data.map((item2, index) => {
                              return (
                                <td
                                  style={{
                                    color:
                                      index < 3
                                        ? "#DD8A1C"
                                        : index < 8
                                        ? "#842D8E"
                                        : index < 11
                                        ? "#FF0000"
                                        : "#EA3EFF",
                                  }}
                                  align="center"
                                  className={`${
                                    index && "border-l"
                                  } border-dashed border-[#616161] py-2 text-xs`}
                                >
                                  {item2}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between pb-3 pt-2 px-5">
                  {headings.map((item) => {
                    return (
                      <p className="leading-[18px] text-xs text-[#0E0B13]">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="absolute   leading-[18px] text-xs  whitespace-nowrap left-3   w-fit h-fit -bottom-6 text-[#616161] ">
              ↑ Worst Case ↑
            </p>
            <p className="absolute   leading-[18px] text-xs text-[#0E0B13] whitespace-nowrap mx-auto left-0 right-0 w-fit h-fit -bottom-6   ">
              REAL ESTATE PRICES DURING CONTRACT
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
