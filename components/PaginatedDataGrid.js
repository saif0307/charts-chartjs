const columns = [
  {
    name: "AD URL ADDRESS",
    id: "AD URL ADDRESS",
  },
  {
    name: "TOWN",
    id: "TOWN",
  },
  {
    name: "PRICE",
    id: "PRICE",
  },
  {
    name: "ESTIMATED YIELD",
    id: "ESTIMATED YIELD",
  },
];

const rows = [
  {
    id: 1,
    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 2,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 3,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 4,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 5,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 6,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 7,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 8,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
  {
    id: 9,

    data: ["97731178", "OVIEDO", "14,500", "96"],
  },
];

const PaginatedDataGrid = () => {
  return (
    <div className="max-w-[900px] mt-20 mx-auto whitespace-nowrap overflow-auto h-[590px]">
      <div className="flex items-center justify-between w-full">
        <div className="max-w-[418px] h-[34px] overflow-hidden w-full border border-[#616161] rounded-[20px] relative">
          <svg
            className="absolute top-[9px] left-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.00873 0C2.6902 0 0 2.70081 0 6.03243C0 9.36405 2.6902 12.0649 6.00873 12.0649C7.45016 12.0649 8.77304 11.5553 9.80841 10.7059L14.8591 15.8025C15.1191 16.0649 15.5418 16.066 15.8032 15.8049C16.0646 15.5438 16.0657 15.1194 15.8057 14.857L10.7427 9.74801C11.5414 8.72385 12.0175 7.43396 12.0175 6.03243C12.0175 2.70081 9.32727 0 6.00873 0ZM1.33527 6.03243C1.33527 3.44117 3.42765 1.34054 6.00873 1.34054C8.58982 1.34054 10.6822 3.44117 10.6822 6.03243C10.6822 8.62369 8.58982 10.7243 6.00873 10.7243C3.42765 10.7243 1.33527 8.62369 1.33527 6.03243Z"
              fill="#616161"
            />
          </svg>

          <input
            placeholder="Search"
            className="pl-8 placeholder:text-xs outline-none  placeholder:text-[#616161] h-full w-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs text-[#0E0B13] leading-5">Page 1 0f 25</p>
          <div className="flex items-center gap-2">
            <button>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00507501 4.92746C0.0229935 4.81661 0.0795285 4.71357 0.166758 4.6331L4.94588 0.189058L4.94602 0.189058C5.05214 0.07684 5.20535 0.0086427 5.36966 0.000583182C5.53385 -0.00760031 5.69456 0.0452208 5.81387 0.146279C5.93318 0.24746 6.00055 0.388072 6 0.534878C5.99944 0.68169 5.93096 0.821931 5.81095 0.922239L1.42369 4.99964L5.81095 9.07705L5.81095 9.07717C5.93096 9.17761 5.99944 9.31772 6 9.46453C6.00055 9.61147 5.93319 9.75195 5.81387 9.85313C5.69455 9.95419 5.53384 10.007 5.36967 9.99895C5.20534 9.99077 5.05213 9.92257 4.94602 9.81035L0.166897 5.36632L0.166758 5.36632C0.0410502 5.24964 -0.0185361 5.08819 0.00507501 4.9275L0.00507501 4.92746Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
            <button>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99492 4.92746C5.97701 4.81661 5.92047 4.71357 5.83324 4.6331L1.05412 0.189058L1.05398 0.189058C0.947863 0.07684 0.794653 0.0086427 0.630335 0.000583182C0.466153 -0.00760031 0.305444 0.0452208 0.186133 0.146279C0.0668153 0.24746 -0.00055134 0.388072 3.20844e-06 0.534878C0.000558711 0.68169 0.0690373 0.821931 0.189049 0.922239L4.57631 4.99964L0.189048 9.07705L0.189048 9.07717C0.0690366 9.17761 0.000557005 9.31772 2.4308e-06 9.46453C-0.000553097 9.61147 0.0668144 9.75195 0.186132 9.85313C0.30545 9.95419 0.466159 10.007 0.630334 9.99895C0.794656 9.99077 0.947865 9.92257 1.05398 9.81035L5.8331 5.36632L5.83324 5.36632C5.95895 5.24964 6.01854 5.08819 5.99492 4.9275L5.99492 4.92746Z"
                  fill="#0E0B13"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table className=" mt-8 whitespace-nowrap min-w-[600px] w-full">
        <thead>
          <tr className="border-y border-[#616161]">
            {columns.map((item) => {
              return (
                <th
                  align="start"
                  className="text-xs py-3 text-[#0E0B13] leading-[18px] font-normal"
                  key={item.id}
                >
                  {item.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index1) => {
            return (
              <tr className="border-t border-dashed" key={item.id}>
                {item.data.map((item2, index) => {
                  return (
                    <td
                      className="text-xs hover:underline  text-[#0E0B13] leading-[18px] font-normal"
                      align="start"
                    >
                      {index == 3 ? (
                        <div className={`bg-[#C3B5EE] relative  w-full `}>
                          <div
                            className="bg-[#A160F1] h-full pl-5 py-4"
                            style={{
                              width: item2 + "%",
                            }}
                          >
                            {item2}%
                          </div>
                        </div>
                      ) : (
                        item2
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaginatedDataGrid;
