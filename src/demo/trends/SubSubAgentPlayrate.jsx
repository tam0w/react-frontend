import {Card, CardContent, CardTitle} from "@/components/ui/card.jsx";
import {Cell, Pie, PieChart, Sector, Tooltip} from "recharts";
import {useEffect, useState} from "react";

function getShade(color, percent) {
  const f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

const agentClassColors = {
  "Duelist": "#ff6e54",
  "Initiator": "#83cccc",
  "Controller": "#85dea4",
  "Sentinel": "#ecda95",
};

    const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 40) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />


    </g>
  );
};

  const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
function getRoleCounts(data) {
  const roleCounts = {};
  data.forEach(item => {
    if (item.role && !roleCounts[item.role]) {
      roleCounts[item.role] = item.value;
    } else if (item.role) {
      roleCounts[item.role] += item.value;
    }
  });
  return Object.entries(roleCounts).map(([name, value]) => ({ name, value }));
}
export function SubSubAgentPlayrate({currentMap, name, data}) {

    const [activeIndex, setActiveIndex] = useState();
    const roleCounts = getRoleCounts(data[currentMap]);

   return (
    <Card className={'bg-zinc-950 border-0 shadow-none items-center justify-center'}>
      <CardTitle className={'normal font text-card px-4 m-0 text-nowrap text-ellipsis'}>Agent Pickrate:</CardTitle>
      <CardContent className={'text-card font mx-4 m-0'}>
        <PieChart width={300} height={300} padding={0,0,0,0}>
          <Pie activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter} stroke={'#ffffff'}
            onMouseLeave={()=>{
              setTimeout(() => {
                setActiveIndex()
              }, 900);
            }} dataKey={'value'} nameKey={'name'} data={roleCounts} cx={160} cy={150} outerRadius={100}>
            {
            roleCounts.map((entry, index) => (
              <Cell key={`cell-${index}`} stroke={'#000000'} fill={agentClassColors[entry.name]} />
            ))
            }
          </Pie>
          <Tooltip content={<Tooltipp/>} />
        </PieChart>
      </CardContent>
    </Card>
  )
}

const Tooltipp = ({
    active, payload, label
}) => {
    if (active && payload && payload.length) {
        console.log(payload)
        return (
            <div className="bg-black/80 border border-ring rounded-md p-2">
                    <h1 className={'font'}>Played: <span className="based text-lg">{payload[0].value}</span></h1>
                    <h1 className={'text-3xl text-card'}>
                        {payload[0].name}
                    </h1>
            </div>
        );
    }

    return null;
};
