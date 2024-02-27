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
  "Duelist": "#136873", // red
  "Initiator": "#4fffba", // green
  "Controller": "#4b53ec", // blue
  "Sentinel": "#000567", // yellow
};

const agentClasses = {
  "Phoenix": "Duelist",
  "Jett": "Duelist",
  "Reyna": "Duelist",
  "Yoru": "Duelist",
  "Raze": "Duelist",
  "Breach": "Initiator",
  "Sova": "Initiator",
  "KAY/O": "Initiator",
  "Chamber": "Initiator",
  "Brimstone": "Controller",
  "Omen": "Controller",
  "Astra": "Controller",
  "Viper": "Controller",
  "Sage": "Sentinel",
  "Cypher": "Sentinel",
  "Killjoy": "Sentinel",
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
    <g className={''}>

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

export function SubSubAgentPlayrate({currentMap, name}) {

    const [activeIndex, setActiveIndex] = useState();

    useEffect(() => {
        fetch(`https://rest-api-t8pa.onrender.com/api/player/${name}/picks`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
            console.log("GRAPHHHHHH",data[currentMap], name)
        });
    }
    , [name])

        const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    if (isLoading) {
        return <div><h1 className={'font button-text text-card text-center'}>Loading...</h1></div>
    }

    return (
        <Card className={'bg-zinc-950 border-0 shadow-none items-center justify-center'}>
          <CardTitle className={'normal font text-card px-4 m-0 text-nowrap text-ellipsis'}>Agent Pickrate:</CardTitle>
          <CardContent className={'text-card font mx-4 m-0'}>

            <PieChart width={300} height={300} padding={0,0,0,0}>
              <Pie activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter}
                                    onMouseLeave={()=>{
                                      setTimeout(() => {
                                          setActiveIndex()
                                      }, 900);
                                  }} dataKey={'value'} nameKey={'name'} data={data[currentMap]} cx={160} cy={150} outerRadius={100}>
                                  {
                                   data[currentMap].map((entry, index) => (
                                    <Cell key={`cell-${index}`} stroke={'#ffffff'} fill={getShade(agentClassColors[agentClasses[entry.name]], index * 0.2)} />
                                  ))
                                }
              </Pie>
              <Tooltip content={<Tooltipp/>} />
            </PieChart>
          </CardContent>
        </Card>
        // <h1 className={'font text-card'}>test</h1>
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
