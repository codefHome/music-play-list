import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Typography from "./Typography";
import Box from "./Box";

interface Data {
  name: string;
  value: number;
}

interface CustomPieChartProps {
  chartData: Data[];
}

interface CustomLegendProps {
  payload: { payload: Data; color: string }[];
}
const CustomLegend = ({ payload }: CustomLegendProps) => {
  return (
    <Box pl='50px' ml='50px'>
  <Box variant="charts">
     
     {payload.map((entry, index) => (
       <li
         key={`item-${index}`}
         style={{ display: "flex", alignItems: "center" }}
       >
         <Box display="flex" mb={3}>
           <Box
             style={{
               backgroundColor: `${entry.color}`,
               width: "18px",
               height: "31px",
               marginRight: "5px",
             }}
           ></Box>
           <Box display="flex" flexDirection="column" mt="-19px">
             <Typography color="black" mb="-22px">
               {entry.payload?.name === "No Data" ? 0 : entry.payload?.value}
             </Typography>
             <Typography color="black" mb="-22px">
               {entry.payload?.name}
             </Typography>
           </Box>
         </Box>
       </li>
     ))}
   </Box>
    </Box>
  
   
  );
};

const COLORS = ["#ADD8E6", "#00FF00", "#FFFF00", "#FFA500"];

const CommonPieChart = ({ chartData }: CustomPieChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const filteredData = chartData.filter((entry) => entry.value > 0);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius =
      percent >= 0.05
        ? innerRadius + (outerRadius - innerRadius) * 0.5
        : innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) + 1;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const isHovered = activeIndex === index;
    const displayLabel = isHovered || percent >= 0.05;

    return displayLabel ? (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
  console.log({ chartData });
  return (
    <Box mt='50px'>
  <PieChart width={400} height={220}>
      <Pie
        data={chartData}
        dataKey="value"
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        stroke="#2D90A5"
        onMouseEnter={onPieEnter}
        onMouseOver={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {filteredData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            style={{ outline: "none" }}
          />
        ))}
      </Pie>
      {chartData.length === 0 && (
        <Pie
          data={[{ name: "No Data", value: 1 }]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#ccc"
        />
      )}
      <Legend
        layout="vertical"
        align="right"
        verticalAlign="middle"
        content={
          <CustomLegend
            payload={chartData.map((entry, index) => ({
              payload: {
                value: entry.value,
                name: entry.name,
              },
              color: COLORS[index % COLORS.length],
            }))}
          />
        }
      />
    </PieChart>
    </Box>
  
  );
};

export default CommonPieChart;
