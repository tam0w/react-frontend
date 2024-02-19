import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export function StatSubSubCard() {
  const getColor = (value, average) => {
    const difference = value - average;
    if (difference > 0.1) {
      return '#4da940'; // Above average
    } else if (difference < -0.1) {
      return '#703e3e'; // Below average
    } else {
      return '#c07f3b'; // Average range
    }
  };

  const CustomizedXAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text stroke={'#ffffff'} x={0} y={0} dy={16} textAnchor="middle" transform="rotate(0)">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className={'p-4'}>
      <ResponsiveContainer width='100%' aspect={14 / 3.0}>
        <BarChart data={playerStats} layout="vertical">
          <XAxis tickLine={false} type="number" domain={[0, 3]} tick={CustomizedXAxisTick} stroke={'#ffffff'} height={55}
          interval={1}/>
          <YAxis dataKey="stat" hide reversed type="category" padding={0,0,0,0}/>
            <Bar legendType="star" dataKey="value"
                background={{ fill: '#3a3a3a' }}
              fill={({ value }) => getColor(value, 1)}
                barSize={25}
            />
        </BarChart>
      </ResponsiveContainer>
    </div>
}