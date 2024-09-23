import React from "react";
import threeDots from "../../assets/images/Shape.svg";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const BarChart2 = () => {
  const data = [
    {
      name: "XS",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {
      name: "S",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {
      name: "M",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {
      name: "L",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {
      name: "XL",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {
      name: "XXL",
      firstBar: 68,
      secondBar: 83,
      thirdBar: 30,
    },
    {},
  ];

  const tabs = [
    { id: "0", value: "First tab", active: true },
    { id: "1", value: "Second tab", active: false },
    { id: "2", value: "Third tab", active: false },
  ];

  return (
    <div className="border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow">
      <div className="flex items-center justify-between mx-3 md:mx-4 mt-4 mb-3">
        <div className="flex flex-col justify-start items-start">
          <div className="font-semibold text-[15px]">Chart 6</div>

          <div className="hidden md:block text-xs text-chartTickColor">Description</div>
        </div>
        <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
          <img src={threeDots} alt="more" width={12.5} height={2.5} />
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-4 md:mx-4 md:pl-[6px]">
        {tabs.map((item) => (
          <div
            className={`pb-1 leading-[18px] text-sm ${item.active && "border-b-2 border-b-lightTeal md:border-b-primary"} ${
              item.active ? "text-text2 font-semibold" : "text-text1 font-semibold md:font-normal"
            }`}
            key={item.id}>
            {item.value}
          </div>
        ))}
      </div>

      <div className="h-[272px] 2xl:mx-auto mt-4 mx-4">
        <ResponsiveContainer height={"100%"} width={"100%"}>
          <BarChart barGap={2} data={data}>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#E0E0E0" />
            <XAxis
              minTickGap={16}
              dataKey="name"
              tick={{ fill: "#616161", fontSize: 10 }}
              axisLine={{ stroke: "#E0E0E0" }}
              tickLine={{ stroke: "#E0E0E0" }}
            />
            <YAxis
              interval={0}
              tick={{ fontSize: 13 }}
              tickLine={{ stroke: "#E0E0E0" }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              axisLine={false}
            />
            <Bar barSize={14.67} dataKey="firstBar" fill="#93C5FD" />
            <Bar barSize={14.67} dataKey="secondBar" fill="#1D4ED8" />
            <Bar barSize={14.67} dataKey="thirdBar" fill="#888888" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart2;
