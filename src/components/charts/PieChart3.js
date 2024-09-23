import React from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import threeDots from "../../assets/images/Shape.svg";

const PieChart3 = ({ chartDays }) => {
  const data = [{ value: 70 }, { value: 30 }, { value: 55 }, { value: 70 }, { value: 135 }];
  const COLORS = ["#F5F5F5", "#00B7C3", "#005B70", "#00666D", "#A6E9ED"];

  const CustomLabel = ({ centerLabel, viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy} fill="#000000" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight={600}>
        {centerLabel}
      </text>
    );
  };

  return (
    <div className="flex flex-col justify-between border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow 2xl:w-[282px]">
      <div>
        <div className="flex items-center justify-between mx-3 md:mx-4 mt-4">
          <div className="font-semibold md:font-bold text-sm">Chart 5</div>
          <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
            <img src={threeDots} alt="more" width={12.5} height={2.5} />
          </div>
        </div>
        <div className="hidden md:block text-xs text-chartTickColor mx-3 md:mx-4 mb-3">Description</div>

        <div className="flex items-center justify-center md:justify-start gap-4 md:mx-4 mt-3 md:mt-0 md:pl-[6px]">
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

        <div className="flex flex-col items-center w-[200px] h-[200px] mx-auto mt-3 md:mt-[34px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie startAngle={90} endAngle={450} data={data} innerRadius={75} outerRadius={100} fill="#8884d8" paddingAngle={1} dataKey="value">
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label content={<CustomLabel centerLabel={1000} />} />
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

export default PieChart3;
