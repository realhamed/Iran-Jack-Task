import React from "react";
import threeDots from "../../assets/images/Shape.svg";
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, XAxis, YAxis } from "recharts";

const BarChart1 = () => {
  const dataChart2 = [
    {
      name: "Jan",
      value: 72000,
    },
    {
      name: "Feb",
      value: 82000,
    },
    {
      name: "Mar",
      value: 65000,
    },
    {
      name: "Apr",
      value: 72000,
    },
    {
      name: "May",
      value: 65000,
    },
    {
      name: "Jun",
      value: 92000,
    },
  ];

  return (
    <div className="flex flex-col justify-between border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow xl:w-[282px]">
      <div>
        <div className="flex items-center justify-between mx-3 md:mx-4 mt-4 mb-3">
          <div className="font-semibold md:hidden text-[15px]">Chart 2</div>

          <div className="flex flex-col justify-start items-start">
            <div className="font-bold text-sm hidden md:block">Cart title</div>

            <div className="hidden md:block text-xs text-chartTickColor">Description</div>
          </div>
          <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
            <img src={threeDots} alt="more" width={12.5} height={2.5} />
          </div>
        </div>
        <div className="flex flex-col items-center xl:w-[240px] h-[190px] mx-auto md:ml-4 mt-3 md:mt-11 mr-4 ml-10">
          <ResponsiveContainer height={"100%"} width={"100%"}>
            <BarChart width={"100%"} height={"100%"} data={dataChart2} barGap={10}>
              <CartesianGrid vertical={false} stroke="#E0E0E0" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#616161", fontSize: 13 }}
                tickMargin={10}
                axisLine={{ stroke: "#E0E0E0" }}
                tickLine={{ stroke: "#E0E0E0" }}
              />
              <YAxis
                label={{
                  value: "Y-axis title",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: 12 },
                }}
                interval={0}
                tick={{ fontSize: 13 }}
                tickLine={{ stroke: "#E0E0E0" }}
                domain={[0, 100000]}
                ticks={[0, 20000, 40000, 60000, 80000, 100000]}
                tickFormatter={(value) => (value !== 0 ? `${value / 1000}K` : value)}
                axisLine={false}
              />
              <Bar barSize={24} dataKey="value" fill="#00B7C3" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-xs ml-14 text-chartTickColor">X-axis title</div>
        </div>
      </div>

      <div className="text-end md:text-start mt-[38px] mx-3 mb-4 md:mx-4 text-primary font-semibold md:font-normal text-[15px] md:text-sm leading-5 py-1">
        View details
      </div>
    </div>
  );
};

export default BarChart1;
