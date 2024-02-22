import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie, Sector} from 'recharts';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {Progress} from "@/components/ui/progress.jsx";
import {SubSubAgentPlayrate} from "@/demo/trends/SubSubAgentPlayrate.jsx";
import {StatSubSubCard} from "@/demo/trends/StatSubSubCard.jsx";
import {SubSubAgentPlayrateTopAgents} from "@/demo/trends/SubSubAgentPlayrateTopAgents.jsx";

const weekly_agent_picks = {overall: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Sage', value: 3 }, { name: 'Omen', value: 2 }],
    split: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    bind: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    lotus: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    icebox: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    ascent: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    breeze: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }],
    sunset: [{ name: 'Jett', value: 12 }, { name: 'Raze', value: 5 }, { name: 'Phoenix', value: 3 }, { name: 'Omen', value: 2 }]}
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
const dataaa = [
  { name: "Page A", pv: 240 },
  { name: "B", pv: 2210 },
  { name: "C", pv: 2300 },
  { name: "Page D", pv: 2000 },
  { name: "Zero", pv: 0 },
  { name: "Hi", pv: 123 },
  { name: "Bye", pv: 2091 }
];
export function SubCardIndStats({name}) {

    const [progress, setProgress] = useState(40)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

    const [currentMap, setCurrentMap] = useState('overall')
    const list_of_maps = ['overall', 'split', 'bind', 'lotus', 'icebox', 'ascent', 'breeze', 'sunset']


  return (
      <div className="px-4 py-0 my-0 text-card-foreground">
          <div className={`flex flex-row justify-between pt-2`}>
              <h1 className="normal font-bold font text-card text-nowrap">Individual Stat Trends:</h1>
              <div className={'flex gap-4 pr-10 mx-0'}>
                  <Button className={'px-2 hover:bg-indigo-500'} onClick={() =>
                  {setCurrentMap(list_of_maps[(list_of_maps.indexOf(currentMap) - 1 + list_of_maps.length) % list_of_maps.length])}}><ChevronLeftIcon className={'h-5 w-5'}/></Button>
                  <CardTitle className={'text-3xl font text-card'}>{currentMap.toLocaleUpperCase()}</CardTitle>
                  <Button className={'px-2 hover:bg-indigo-500'} onClick={() => {setCurrentMap(list_of_maps[(list_of_maps.indexOf(currentMap) + 1 + list_of_maps.length) % list_of_maps.length])}}><ChevronRightIcon className={'h-5 w-5'}/></Button>
              </div>
          </div>

          <div className="flex flex-col gap-14 py-4">

              <div className="flex justify-between gap-x-32 flex-row gap-10 pt-4">

                  <StatSubSubCard/>

                  <SubSubAgentPlayrate currentMapp={currentMap} data={weekly_agent_picks}/>

                  <StatSubSubCard/>
              </div>

              <div className="flex flex-row justify-center gap-14 items-center">


                  <Card className={'bg-zinc-950 border-0 shadow-none space-y-10  text-nowrap text-ellipsis'}>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>FB Rounds: <span
                          className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {weekly_player_performance[currentMap].FBPR * 100}%</span>
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].FBPR * 100}
                                    color={'above'}/>
                      </CardTitle>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>Avg. KAST: <span
                          className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].KAST * 100}%
                          <Progress className={'p-0 m-0'} value={30} color={'below'}/>
                      </span></CardTitle>
                      <CardTitle className={'text-card text-3xl font px-4 m-0'}>1vX Winrate: <span
                          className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].clutchrate * 100}%
                          <Progress className={'p-0 m-0'} value={80} color={'above'}/>
                      </span></CardTitle>

                  </Card>
                    <div className={'flex flex-col gap-y-3'}>
                  <h1 className="text-5xl font font-bold text-card">{name}</h1>
                        <SubSubAgentPlayrateTopAgents currentMap={currentMap} data={weekly_agent_picks}/>
                    </div>

                  <Card className={'bg-zinc-950 border-0 shadow-none space-y-10 text-nowrap text-ellipsis '}>
                      <CardTitle className={'text-card text-3xl font  px-4 m-0'}>Avg. KDA: <span
                          className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {weekly_player_performance[currentMap].KD}</span>
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].KD * 100}
                                    color={'above'}/>

                      </CardTitle>
                      <CardTitle className={'text-card text-3xl font p-0 px-4 m-0'}>True FB %: <span
                          className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].TFB * 100}%
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].TFB * 100}
                                    color={'mid'}/>
                      </span></CardTitle>
                      <CardTitle className={'text-card text-3xl font text-slate-300 p-0 px-4 m-0'}>ADR: <span
                          className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {weekly_player_performance[currentMap].ADR}
                          <Progress className={'p-0 m-0'} value={weekly_player_performance[currentMap].ADR - 100}
                                    color={'mid'}/>
                      </span></CardTitle>

                  </Card>

              </div>


          </div>
      </div>
  )
}

