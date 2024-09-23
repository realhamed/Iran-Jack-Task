import React from "react";
import threeDots from "../../assets/images/Shape.svg";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AreaChart1 = ({ chartDays }) => {
  const data = [
    {
      name: "Jan",
      Line1: 52000,
      Line2: 69000,
    },
    {
      name: "Jan-1-Feb",
      Line1: 53400,
      Line2: 74600,
      hidden: true,
    },
    {
      name: "Jan-2-Feb",
      Line1: 54800,
      Line2: 80200,
      hidden: true,
    },
    {
      name: "Jan-3-Feb",
      Line1: 56200,
      Line2: 85800,
      hidden: true,
    },
    {
      name: "Feb",
      Line1: 57600,
      Line2: 91400,
    },
    {
      name: "Feb-1-Mar",
      Line1: 59000,
      Line2: 97000,
      hidden: true,
    },
    {
      name: "Feb-2-Mar",
      Line1: 55834,
      Line2: 95500,
      hidden: true,
    },
    {
      name: "Feb-3-Mar",
      Line1: 52668,
      Line2: 94000,
      hidden: true,
    },
    {
      name: "Mar",
      Line1: 49502,
      Line2: 92500,
    },
    {
      name: "Mar-1-Apr",
      Line1: 46336,
      Line2: 91000,
      hidden: true,
    },
    {
      name: "Mar-2-Apr",
      Line1: 43170,
      Line2: 89500,
      hidden: true,
    },
    {
      name: "Mar-3-Apr",
      Line1: 40000,
      Line2: 88000,
      hidden: true,
    },
    {
      name: "Apr",
      Line1: 42000,
      Line2: 74400,
    },
    {
      name: "Apr-1-May",
      Line1: 44000,
      Line2: 60800,
      hidden: true,
    },
    {
      name: "Apr-2-May",
      Line1: 46000,
      Line2: 47200,
      hidden: true,
    },
    {
      name: "Apr-3-May",
      Line1: 48000,
      Line2: 33600,
      hidden: true,
    },
    {
      name: "May",
      Line1: 50000,
      Line2: 20000,
    },
    {
      name: "May-1-Jun",
      Line1: 51400,
      Line2: 32400,
      hidden: true,
    },
    {
      name: "May-2-Jun",
      Line1: 52800,
      Line2: 44800,
      hidden: true,
    },
    {
      name: "May-3-Jun",
      Line1: 54200,
      Line2: 57200,
      hidden: true,
    },
    {
      name: "Jun",
      Line1: 55600,
      Line2: 69600,
    },
    {
      name: "Jun-1-",
      Line1: 57000,
      Line2: 82000,
    },

    {
      name: "Jun-2-",
      Line1: 59571,
      Line2: 70285,
    },

    {
      name: "Jun-3-",
      Line1: 62142,
      Line2: 58571,
    },

    {
      Line1: 64713,
      Line2: 46857,
    },
    {
      Line1: 67284,
      Line2: 35143,
    },
    {
      Line1: 69855,
      Line2: 23429,
    },
    {
      Line1: 72426,
      Line2: 11715,
    },
    {
      Line1: 75000,
      Line2: 0,
    },
  ];

  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex items-center gap-4 pl-[53px] mt-6">
        {payload.map((item, index) => (
          <div className="flex items-center gap-1" key={`${item.value}${index}`}>
            <div className={`rounded-[1px] w-[10px] h-[10px]`} style={{ backgroundColor: `${item.color}` }} />
            <div className="text-xs">{`Line ${index + 1}`}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-borderColor1 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-normalShadow">
      <div className="flex items-center justify-between mx-3 md:mx-4 mt-4">
        <div className="font-semibold md:font-bold text-sm">Chart 3</div>
        <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center">
          <img src={threeDots} alt="more" width={12.5} height={2.5} />
        </div>
      </div>
      <div className="hidden md:block text-xs text-chartTickColor mx-3 md:mx-4 mb-3">Description</div>

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

      <div className="flex flex-col items-center pl-4 mx-auto h-[216px] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#E0E0E0" />
            <XAxis
              interval={3}
              label={{
                value: "X-axis title",
                position: "bottom",
                offset: 8,
                style: { fontSize: 10, fontWeight: 600 },
              }}
              dataKey="name"
              tick={{ fill: "#616161", fontSize: 13 }}
              axisLine={{ stroke: "#E0E0E0" }}
              tickLine={{ stroke: "#E0E0E0" }}
            />
            <YAxis
              label={{
                value: "Y-axis title",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fontSize: 10, fontWeight: 600 },
              }}
              interval={0}
              tick={{ fontSize: 13 }}
              tickLine={{ stroke: "#E0E0E0" }}
              domain={[0, 100000]}
              ticks={[0, 20000, 40000, 60000, 80000, 100000]}
              tickFormatter={(value) => (value !== 0 ? `${value / 1000}K` : value)}
              axisLine={false}
            />
            <Legend content={<CustomLegend />} />
            <Area type="linear" dataKey="Line1" stroke="#00B7C3" strokeWidth={2} fill="#00B7C360" />
            <Area type="linear" dataKey="Line2" stroke="#B146C2" strokeWidth={2} fill="#B146C260" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="text-end md:text-start mt-[38px] mx-3 mb-4 md:mx-4 text-primary font-semibold md:font-normal text-[15px] md:text-sm leading-5 py-1">
        View details
      </div>
    </div>
  );
};

export default AreaChart1;
