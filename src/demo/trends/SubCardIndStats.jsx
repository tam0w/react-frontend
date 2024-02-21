import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie, Sector} from 'recharts';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {Progress} from "@/components/ui/progress.jsx";

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
  "Duelist": "#ebff66", // red
  "Initiator": "#8c6666", // green
  "Controller": "#9e00ff", // blue
  "Sentinel": "#4975ff", // yellow
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

const weekly_player_performance = {
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.68, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.63,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.83,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.53,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.53,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.53,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.53,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, TFB: 0.53,FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}}

const weekly_agent_picks = {overall: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Sage', value: 3 }, { name: 'Omen', value: 2 }],
    split: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    bind: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    lotus: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    icebox: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    ascent: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    breeze: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    sunset: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }]}

export function SubCardIndStats({name}) {

    const [progress, setProgress] = useState(40)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

    const [currentMap, setCurrentMap] = useState('overall')
    const [activeIndex, setActiveIndex] = useState();
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

  return (
      <div className="p-4 text-card-foreground">
          <div className={`flex flex-row justify-between pt-2`}>
              <h1 className="text-5xl font font-bold text-card">{name}</h1>
              <div className={'flex gap-4 pt-2 pr-10 mx-0'}>
                  <Button className={'px-2 hover:bg-indigo-500'} onClick={() => {
                  }}><ChevronLeftIcon className={'h-5 w-5'}/></Button>
                  <CardTitle className={'text-3xl font text-card'}>Overall</CardTitle>
                  <Button className={'px-2 hover:bg-indigo-500'} onClick={() => {
                  }}><ChevronRightIcon className={'h-5 w-5'}/></Button>
              </div>
          </div>
          <div className="flex flex-col gap-4 py-4">

              <div className="flex flex-row gap-10 pt-4">

                  <Card className={'bg-zinc-950 border-0 shadow-none'}>
                      <CardTitle className={'text-3xl font text-card px-4 m-0 text-nowrap text-ellipsis'}>Agent Pickrate:</CardTitle>
                      <CardContent className={'text-card font mx-4 m-0'}>

                          <PieChart width={250} height={300} padding={0,0,0,0}>
                              <Pie  padding={0,0,0,0} activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter}
                                    onMouseLeave={()=>{
                                      setTimeout(() => {
                                          setActiveIndex()
                                      }, 700);
                                  }} dataKey={'value'} nameKey={'name'} data={weekly_agent_picks[currentMap]} cx={125} cy={115} outerRadius={100}>
                                  {
                                   weekly_agent_picks[currentMap].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fillOpacity={0.8} stroke={'#ffffff'} fill={getShade(agentClassColors[agentClasses[entry.name]], index * 0.2)} />
                                  ))
                                }
                              </Pie>
                              <Tooltip content={<Tooltipp/>} />
                          </PieChart>
                      </CardContent>
                  </Card>

                  <Card className={'bg-zinc-950 border-0 shadow-none space-y-14 text-nowrap text-ellipsis '}>
                      <CardTitle className={'text-card text-3xl font  px-4 m-0'}>Avg. KDA: <span className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {weekly_player_performance[currentMap].KD}</span>
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].KD*100}  color={'above'} />

                      </CardTitle>
                      <CardTitle className={'text-card text-3xl font p-0 px-4 m-0'}>True FB %: <span className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].TFB*100}%
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].TFB*100} color={'mid'} />
                      </span></CardTitle>
                      <CardTitle className={'text-card text-3xl font text-slate-300 p-0 px-4 m-0'}>ADR: <span className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].ADR}
                          <Progress className={'p-0 m-0'} value={90}  color={'above'} />
                      </span></CardTitle>

                  </Card>

                  <Card className={'bg-zinc-950 border-0 shadow-none space-y-14  text-nowrap text-ellipsis'}>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>FB Rounds: <span className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {weekly_player_performance[currentMap].FBPR*100}%</span>
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].FBPR*100}  color={'above'} />
                      </CardTitle>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>Avg. KAST: <span className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].KAST*100}%
                          <Progress className={'p-0 m-0'} value={30}  color={'below'} />
                      </span></CardTitle>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>1vX Winrate: <span className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].clutchrate*100}%
                          <Progress className={'p-0 m-0'} value={80}  color={'above'} />
                      </span></CardTitle>

                  </Card>


              </div>

              <div className="flex flex-row gap-4">


              </div>
          </div>
      </div>
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
