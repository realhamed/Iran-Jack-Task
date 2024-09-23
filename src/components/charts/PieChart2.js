import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import threeDots from "../../assets/images/Shape.svg";
import settingIcon from "../../assets/images/settingIcon.svg";
import fullScreenIcon from "../../assets/images/fullscreenIcon.svg";
import searchIcon from "../../assets/images/search.svg";

const PieChart2 = () => {
  const data1 = [{ value: 92 }, { value: 8 }];
  const data2 = [{ value: 85 }, { value: 15 }];
  const data3 = [{ value: 75 }, { value: 25 }];
  const data4 = [{ value: 55 }, { value: 45 }];
  const data5 = [{ value: 85 }, { value: 15 }];
  const data6 = [{ value: 60 }, { value: 40 }];
  const data7 = [{ value: 75 }, { value: 25 }];
  const data8 = [{ value: 65 }, { value: 35 }];
  const COLORS1 = ["#555555", "#F5F5F5"];
  const COLORS2 = ["#2563EB", "#F5F5F5"];
  const COLORS3 = ["#3B82F6", "#F5F5F5"];
  const COLORS4 = ["#AAAAAA", "#F5F5F5"];
  const COLORS5 = ["#60A5FA", "#F5F5F5"];
  const COLORS6 = ["#1D4ED8", "#F5F5F5"];
  const COLORS7 = ["#1E3A8A", "#F5F5F5"];
  const COLORS8 = ["#BFDBFE", "#F5F5F5"];

  const legends = [
    {
      color: "#555555",
      percent: "30%",
    },
    {
      color: "#2563EB",
      percent: "30%",
    },
    {
      color: "#3B82F6",
      percent: "30%",
    },
    {
      color: "#AAAAAA",
      percent: "30%",
    },
    {
      color: "#60A5FA",
      percent: "30%",
    },
    {
      color: "#1D4ED8",
      percent: "30%",
    },
    {
      color: "#1E3A8A",
      percent: "30%",
    },
    {
      color: "#BFDBFE",
      percent: "30%",
    },
  ];

  return (
    <div className="flex flex-col justify-between border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow flex-1 2xl:w-[266px]">
      <div>
        <div className="flex items-center justify-between mx-3 md:mx-4 mt-4">
          <div className="font-semibold md:font-bold text-sm">Chart 4</div>
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={searchIcon} alt="search" width={20} height={20} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={fullScreenIcon} alt="more" width={20} height={20} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={settingIcon} alt="more" width={20} height={20} />
            </div>

            <div className="w-8 h-8 flex items-center justify-center">
              <img src={threeDots} alt="more" />
            </div>
          </div>
        </div>
        <div className="hidden md:block text-xs text-chartTickColor mx-3 md:mx-4 mb-3">Description</div>

        <div className="relative flex flex-col items-center w-[234px] h-[234px] mx-auto mt-10">
          <div className="absolute top-0 flex flex-col gap-[2px] right-[9px] w-[90px]">
            {legends.map((item, index) => (
              <div key={`${item.color}${index}`} className="flex items-center gap-1 justify-start h-3">
                <div style={{ backgroundColor: `${item.color}` }} className={`w-2 h-2`} />
                <p className="text-[10px]">{item.percent}</p>
              </div>
            ))}
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie startAngle={90} endAngle={360} data={data1} innerRadius={107.5} outerRadius={117.5} dataKey="value">
                {data1.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data2} innerRadius={93.5} outerRadius={103.5} dataKey="value">
                {data2.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data3} innerRadius={79.5} outerRadius={89.5} dataKey="value">
                {data3.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data4} innerRadius={65.5} outerRadius={75.5} dataKey="value">
                {data4.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data5} innerRadius={51.5} outerRadius={61.5} dataKey="value">
                {data5.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS5[index % COLORS5.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data6} innerRadius={37.5} outerRadius={47.5} dataKey="value">
                {data6.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS6[index % COLORS6.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data7} innerRadius={23.5} outerRadius={33.5} dataKey="value">
                {data7.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS7[index % COLORS7.length]} />
                ))}
              </Pie>
              <Pie startAngle={90} endAngle={360} data={data8} innerRadius={9.5} outerRadius={19.5} dataKey="value">
                {data8.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS8[index % COLORS8.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-end md:text-start mt-[38px] mx-3 mb-4 md:mx-4 text-primary font-semibold md:font-normal text-[15px] md:text-sm leading-5 py-1">
        View details
      </div>
    </div>
  );
};

export default PieChart2;
