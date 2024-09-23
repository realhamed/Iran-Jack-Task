import React from "react";
import threeDots from "../../assets/images/Shape.svg";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChart1 = ({ chartDays }) => {
  const dataChart1 = [
    { name: "Label 1", value: 72 },
    { name: "Label 2", value: 28 },
  ];

  const COLORS = ["#00B7C3", "#D1D1D1"];

  const CustomLabel = ({ centerLabel, viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy - 5} fill="#000000" textAnchor="middle" dominantBaseline="top" fontSize="34" fontWeight={700}>
        {centerLabel}
      </text>
    );
  };

  const calculatePercentage = () => {
    const total = dataChart1.reduce((sum, item) => {
      return (sum += item.value);
    }, 0);
    const percent = ((dataChart1[0].value / total) * 100).toFixed(0) + `%`;
    return percent;
  };

  return (
    <div className="flex flex-col justify-between border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow xl:w-[282px]">
      <div>
        <div className="flex items-center justify-between mx-3 md:mx-4 mt-4">
          <div className="font-semibold md:hidden text-[15px]">Chart 1</div>
          <div className="flex flex-col justify-start items-start mb-3">
            <div className="font-bold text-sm hidden md:block">Cart title</div>

            <div className="hidden md:block text-xs text-chartTickColor">Description</div>
          </div>
          <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
            <img src={threeDots} alt="more" width={12.5} height={2.5} />
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4 md:mx-4 md:pl-[6px]">
          {chartDays.map((item) => (
            <div
              className={`pb-1 leading-[18px] text-sm ${item.active && "border-b-2 border-b-lightTeal md:border-b-primary"} ${
                item.active ? "text-text2 font-semibold" : "text-text1 font-semibold md:font-normal"
              }`}
              key={item.id}>
              {item.value}
            </div>
          ))}
        </div>

        <div className="flex items-baseline justify-center xl:w-[218px] h-[90px] mx-auto mt-5 md:mt-14">
          <div className="font-semibold text-xs text-center">0</div>
          <ResponsiveContainer height={"100%"} width={184}>
            <PieChart>
              <Pie
                data={dataChart1}
                cy={"110%"}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={83}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value">
                {dataChart1.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <Label content={<CustomLabel centerLabel={calculatePercentage()} />} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="font-semibold text-xs">100</div>
        </div>

        <div className="hidden md:flex items-center gap-4 justify-center w-full mt-9">
          <div className="flex items-center gap-1">
            <div className="bg-lightTeal w-[10px] h-[10px] rounded-[1px]" />
            <p className="text-xs">Label 1</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-neutralGray w-[10px] h-[10px] rounded-[1px]" />
            <p className="text-xs">Label 2</p>
          </div>
        </div>
      </div>
      <div className="text-end md:text-start mt-[38px] mx-3 mb-4 md:mx-4 text-primary font-semibold md:font-normal text-[15px] md:text-sm leading-5 py-1">
        View details
      </div>
    </div>
  );
};

export default PieChart1;
