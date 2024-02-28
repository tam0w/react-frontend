import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie, Sector} from 'recharts';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {Progress} from "@/components/ui/progress.jsx";
import {SubSubAgentPlayrate} from "@/demo/trends/SubSubAgentPlayrate.jsx";
import {StatSubSubCard} from "@/demo/trends/StatSubSubCard.jsx";
import {SubSubAgentPlayrateTopAgents} from "@/demo/trends/SubSubAgentPlayrateTopAgents.jsx";
import {SubSubBarGraph1VaryingStats} from "@/demo/trends/SubSubBarGraph1VaryingStats.jsx";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";

const stat_list = ['KD', 'Kdiff', 'KAST', 'FBPR', 'TFB', 'FKdiff', 'OPkpr', 'Clutches', 'ADR', 'clutchrate']

export function SubCardIndStats({name}) {

    const [progress, setProgress] = useState(40)
    const [performanceData, setPerformanceData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    
        useEffect(() => {
        fetch(`https://rest-api-t8pa.onrender.com/api/player/${name}/picks`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
            console.log("TEST",data[currentMap], name)
        });
    }
    , [])

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        fetch(`https://rest-api-t8pa.onrender.com/api/player/${name}/weeklystats`)
            .then(response => response.json())
            .then(data => {
                setPerformanceData(data)
                setIsLoading(false)
            });

    }, []);


    const [currentMap, setCurrentMap] = useState('overall')
    const [stat, setStat] = useState('KD');

    const list_of_maps = ['overall', 'split', 'bind', 'lotus', 'icebox', 'ascent', 'breeze', 'sunset']

    if (isLoading) {
        return <div><ButtonSpin className={'bg-muted'}/></div>
    }


    return (
        <div className="px-4 py-0 my-0 text-card-foreground">
            <div className={`flex flex-row gap-48 pt-2`}>
                <h1 className="normal font text-card text-nowrap">Individual Stat Trends:</h1>
                <div className={'flex gap-4 pr-10 mx-0'}>
                    <Button className={'px-2 hover:bg-indigo-500'} onClick={() => {
                        setCurrentMap(list_of_maps[(list_of_maps.indexOf(currentMap) - 1 + list_of_maps.length) % list_of_maps.length])
                    }}><ChevronLeftIcon className={'h-5 w-5'}/></Button>
                    <CardTitle className={'text-3xl font text-card text-center w-32 font-bold'}>{currentMap.toLocaleUpperCase()}</CardTitle>
                    <Button className={'px-2 hover:bg-indigo-500'} onClick={() => {
                        setCurrentMap(list_of_maps[(list_of_maps.indexOf(currentMap) + 1 + list_of_maps.length) % list_of_maps.length])
                    }}><ChevronRightIcon className={'h-5 w-5'}/>
                    </Button>
                </div>
            </div>
            <div className={'flex flex-row gap-20 items-center'}>
            <div className="flex flex-col gap-14 py-4">

                <div className="flex justify-between gap-x-32 flex-row gap-10 pt-4">

                    <SubSubBarGraph1VaryingStats data={performanceData.find(performance => performance.name === currentMap)}/>



                    <SubSubAgentPlayrate currentMap={currentMap} name={name} data={data}/>


                </div>

                <div className="flex flex-row justify-center gap-14 items-center">


                    <Card className={'bg-zinc-950 border-0 shadow-none space-y-10  text-nowrap text-ellipsis'}>
                        <CardTitle className={'text-card text-3xl font px-4 m-0'}>FB Rounds: <span
                            className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.FBPR * 100).toFixed(2)}%
                      </span>
                            <Progress className={'p-0 m-0'}
                                      value={performanceData.find(performance => performance.name === currentMap)?.FBPR * 100}
                                      color={'above'}/>
                        </CardTitle>
                        <CardTitle className={'text-card text-3xl font px-4 m-0'}>Avg. KAST: <span
                            className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.KAST * 100).toFixed(2)}%
                          <Progress className={'p-0 m-0'}
                                    value={performanceData.find(performance => performance.name === currentMap)?.KAST * 100}
                                    color={'below'}/>
                      </span></CardTitle>
                        <CardTitle className={'text-card text-3xl font px-4 m-0'}>1vX Winrate: <span
                            className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.clutchrate * 100).toFixed(2)}%
                          <Progress className={'p-0 m-0'} value={80} color={'above'}/>
                      </span></CardTitle>

                    </Card>
                    <div className={'flex flex-col gap-y-3'}>
                        <h1 className="text-5xl text-center font font-bold text-card">{name}</h1>
                        <SubSubAgentPlayrateTopAgents currentMap={currentMap}  name={name} data={data}/>
                    </div>

                    <Card className={'bg-zinc-950 border-0 shadow-none space-y-10 text-nowrap text-ellipsis '}>
                        <CardTitle className={'text-card text-3xl font  px-4 m-0'}>Avg. KDA: <span
                            className={'text-slate-300 text-3xl font m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.KD).toFixed(2)}</span>
                            <Progress className={'p-0 m-0'}
                                      value={performanceData.find(performance => performance.name === currentMap)?.KD * 100}
                                      color={'above'}/>

                        </CardTitle>
                        <CardTitle className={'text-card text-3xl font p-0 px-4 m-0'}>True FB %: <span
                            className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.TFB * 100).toFixed(2)}%
                          <Progress className={'p-0 m-0'}
                                    value={performanceData.find(performance => performance.name === currentMap)?.TFB * 100}
                                    color={'mid'}/>
                      </span></CardTitle>
                        <CardTitle className={'text-card text-3xl font text-slate-300 p-0 px-4 m-0'}>ADR: <span
                            className={'text-slate-300 text-3xl m-0 font-bold'}>
                          {(performanceData.find(performance => performance.name === currentMap)?.ADR)}
                            <Progress className={'p-0 m-0'}
                                      value={performanceData.find(performance => performance.name === currentMap)?.ADR - 100}
                                      color={'mid'}/>
                      </span></CardTitle>
                    </Card>
                </div>
            </div>

                <div className="flex flex-col justify-center items-center pr-10">

                    <CardTitle
                        className={'pl-16 pb-4 text-3xl font text-card text-center'}><span className={'font-bold'}>{stat.toLocaleUpperCase()}</span> <br/>Across
                        Maps</CardTitle>


                    <StatSubSubCard data={performanceData} stat={stat}/>

                    <div className={'pl-16 pt-2 flex gap-4 justify-center items-center pb-4'}>

                        <Button className={'px-2 hover:bg-indigo-500 m-0'} onClick={() => {
                            setStat(stat_list[(stat_list.indexOf(stat) - 1 + stat_list.length) % stat_list.length])
                        }}><ChevronLeftIcon className={'h-5 w-5'}/></Button>
                        <CardTitle
                            className={'text-3xl font text-card text-center '}>Change Stat</CardTitle>
                        <Button className={'px-2 hover:bg-indigo-500 m-0'} onClick={() => {
                            setStat(stat_list[(stat_list.indexOf(stat) + 1 + stat_list.length) % stat_list.length])
                        }}><ChevronRightIcon className={'h-5 w-5'}/></Button>
                    </div>
                </div>

            </div>

        </div>
    )
}
