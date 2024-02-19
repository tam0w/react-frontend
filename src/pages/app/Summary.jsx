import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";
import _ from 'lodash';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    RadarChart,
    Radar,
    PolarRadiusAxis,
    PolarGrid, PolarAngleAxis, Legend, Cross, ReferenceLine, LabelList, Label
} from 'recharts';
import {Button} from "@/components/ui/button.jsx";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CalendarIcon,
    CountdownTimerIcon, DoubleArrowRightIcon, EnvelopeOpenIcon, EyeOpenIcon,
    LapTimerIcon, LinkBreak1Icon, OpenInNewWindowIcon, PlusIcon, TableIcon, ThickArrowUpIcon,
    TimerIcon
} from "@radix-ui/react-icons";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Dialog, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogContent, DialogClose, DialogOverlay , DialogPortal} from "@/components/ui/dialog.jsx";
import {Input} from "postcss";
import {TeamPercentages} from "@/demo/trends/TeamPercentages.jsx";
import {TrendsIndStats} from "@/demo/trends/TrendsIndStats.jsx";

const mapwise_playdata = [{map: 'split', total_scrims: 18, rounds: 18*24, round_wins:14*18, round_losses: 18*10},
    {map: 'icebox', total_scrims: 12, rounds: 12*24, round_wins:14*12, round_losses: 12*10},
    {map: 'ascent', total_scrims: 20, rounds: 20*24, round_wins:3*20, round_losses: 20*17},
    {map: 'lotus', total_scrims: 24, rounds: 24*24, round_wins:14*24, round_losses: 24*10},
    {map: 'breeze', total_scrims: 6, rounds: 6*24, round_wins:14*6, round_losses: 6*10},
    {map: 'sunset', total_scrims: 10, rounds: 10*24, round_wins:14*10, round_losses: 10*10},
    {map: 'bind', total_scrims: 21, rounds: 21*24, round_wins:14*21, round_losses: 21*10}]

const performance_indicators = [
    {kd: 1.17, kast: 0.76, fbpr: 0.53, day: 'Monday'},
    {kd: 0.94, kast: 0.86, fbpr: 0.41, day: 'Tuesday'},
    {kd: 0.74, kast: 0.62, fbpr: 0.86, day: 'Wednesday'},
    {kd: 0.89, kast: 0.64, fbpr: 0.67, day: 'Thursday'},
    {kd: 1.04, kast: 0.85, fbpr: 0.96, day: 'Friday'},
    {kd: 1.11, kast: 0.78, fbpr: 0.94, day: 'Saturday'},
    {kd: 1.41, kast: 0.89, fbpr: 0.99, day: 'Sunday'}
    ]

const agent_data = [['Jett', 0.747, 67], ['Raze', 0.651, 52], ['Sova', 0.346, 45], ['Breach', 0.347, 42],
    ['Omen', 0.697, 41], ['Iso', 0.2377, 67], ['Deadlock', 0.3455, 52], ['Skye', 0.376, 45], ['Yoru', 0.447, 42],
    ['Reyna', 0.757, 62], ['Gekko', 0.651, 12], ['Sova', 0.346, 45], ['Breach', 0.347, 42],
    ['Killjoy', 0.697, 41], ['Cypher', 0.2377, 67], ['Sage', 0.345, 52], ['Brimstone', 0.376, 45],
    ["Astra", 0.697, 41], ['Viper', 0.2377, 67], ['Fade', 0.345, 52], ['Phoenix', 0.376, 45], ['Harbour', 0.447, 42]]



// Writing dummy data for weekly player performance of each player in the team for the parameters mentioned above, both
// for the over all and for each of the 7 valorant maps seperated as well.

const weekly_player_performance = [{name: 'tam0w',
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}},
    {name: 'player2',
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}},
    {name: 'hmm',
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}},
    {name: 'p4',
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}},
    {name: 'gamer5',
    overall: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    split: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    bind: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    lotus: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    icebox: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    ascent: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    breeze: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,},
    sunset: {KD: 1.17,
        Kdiff: 25, KAST: 0.76, FBPR: 0.53, FKdiff: 4, OPkpr: 0.17, Clutches: 54, ADR: 134, clutchrate: 0.34,
        one_one: 0.77, one_two: 0.53, one_three: 0.34, one_four: 0.15, one_five: 0.04,}}]

export function Summary() {

    // let url = 'https://rest-api-t8pa.onrender.com/api/match'
    // const [data, setData] = useState();
    const [Loading, setLoading] = useState()
    const [sortState, setSortState] = useState('high');
    const [performanceData, setPerformanceData] = useState(sortData(agent_data, sortState));

    function sortData(data, sortState) {
        if (sortState === 'high') {
            return data.sort((a, b) => b[1] - a[1]); // For descending order
        }
        else {
            return data.sort((a, b) => a[1] - b[1]); // For ascending order
        }
    }

    // setPerformanceData(sortData(agent_data, sortState));




    // useEffect(() => {
    //
    //     setLoading(true)
    //     const fetchData = async () => {
    //         const response = await fetch(url)
    //         const data = await response.json();
    //         setData(data);
    //         setLoading(false)
    //     }
    //     fetchData()
    // }, []);


    return (<div className={'flex flex-col'}>
        <div className={'flex flex-row space-x-6 duration-1000 py-4 px-10'}>


            <div className={'flex flex-col text-center gap-2'}>
                <div className={'border border-ring text-card-foreground space-y-1 font-semibold'}>
                    <LapTimerIcon className={'h-6 w-6 inline mt-3'}> </LapTimerIcon>

                    <div className={'flex flex-row w-full justify-stretch pt-2'}>
                        <Button
                            className={'bg-card/5 w-full border-primary border-r-0 rounded-none rounded-l-sm text-md pt-1'}>Days</Button>
                        <Button className={'bg-card/5 w-full border-primary rounded-none text-md pt-1'}>Month</Button>
                        <Button
                            className={'bg-card/5 w-full border-l-0 border-primary rounded-none rounded-r-sm text-md pt-1'}>Seasonal</Button>
                    </div>
                </div>
                <Card className={'rounded-none rounded-b-md'}>
                    <CardHeader className={'pb-0 mb-0'}>
                        <CardTitle>Scrims Played</CardTitle>
                        <CardDescription>
                            <p className=''>Mapwise breakdown of scrims played.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={'p-4 mt-0 pt-0'}>
                        <RadarChart outerRadius={90} width={290} height={250} data={mapwise_playdata}>
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="map" stroke="#f3f3f3"/>
                            <Radar name="Rounds Played" dataKey="rounds" stroke="#8884d8" fill="#8884d8"
                                   fillOpacity={0.3}/>
                            <Radar name="Rounds Won" dataKey="round_wins" stroke="#82ca9d" fill="#82ca9d"
                                   fillOpacity={1}/>
                            <Tooltip offset={120} content={<CustomTooltip/>}/>
                            <Legend height={15}/>
                        </RadarChart>
                    </CardContent>
                </Card>
            </div>


            <Card className={'rounded-none rounded-b-md'}>
                <CardHeader className={'pb-0 mb-0'}>
                    <CardTitle>Performance Trends</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Trends of various performance metrics in the
                        time-frame.</p></CardDescription>
                </CardHeader>
                <CardContent className={'items-center justify-center flex p-4 m-0'}>
                    <LineChart width={800} height={340} data={performance_indicators} stroke="#f3f3f3">
                        <XAxis dataKey={'day'} stroke="#fcfdfd" tickLine={false} type={'category'} tickMargin={10}
                               interval={"preserveStartEnd"}/>
                        <Line strokeWidth={2} dataKey={'fbpr'} stroke='#a377d4' dot={false}/>
                        <Line strokeWidth={2} dataKey={'kd'} stroke='#6fc894' dot={false}/>
                        <Line strokeWidth={2} dataKey={'kast'} stroke='#d36fa7' dot={false}/>
                        <ReferenceLine y={1} stroke="#ffffff" strokeOpacity={0.8} strokeDasharray={18}/>

                        <Legend verticalAlign={'top'}/>
                        <Tooltip content={<LineTooltip/>}/>
                    </LineChart>
                </CardContent>
            </Card>
            <div className={'flex flex-col text-center'}>
                <Table className={'border-b-0'}>
                    <TableHeader>
                        <TableRow className={'border-muted-foreground/30'}>
                            <TableHead className="text-muted-foreground w-[100px]">No.</TableHead>
                            <TableHead className={'px-8 text-muted-foreground'}>Agent</TableHead>
                            <TableHead className={'text-muted-foreground py-4'}>Win <br/> Rate</TableHead>
                            <TableHead
                                className=" text-muted-foreground py-4 text-right pr-6">Times <br/> Played</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className={''}>

                        {
                            performanceData.map((info, index) => {
                                    if (index + 1 < 8)
                                        return (<TableRow className={'border-muted-foreground/30 h-12'}>
                                            <TableCell className={'text-left text-card-foreground'}>
                                                {sortState === 'high' ? index + 1 : performanceData.length - index}
                                            </TableCell>
                                            <TableCell
                                                className={'font-semibold text-card-foreground text-left'}>{info[0]}</TableCell><TableCell
                                            className={'text-left text-card-foreground font-semibold'}>{_.round(info[1] * 100, 3)}%</TableCell>
                                            <TableCell
                                                className={'text-right text-card-foreground pr-6'}>{info[2]}</TableCell>
                                        </TableRow>)
                                }
                            )}

                    </TableBody>

                </Table>
                <div
                    className={`flex border rounded-b-md border-ring items-center justify-center text-center font-semibold`}>
                    <Button onClick={() => setSortState('high')} variant={'ghost'}
                            className={`w-full pb-2 ${sortState === 'high' ? "bg-muted/40" : ""} rounded-none rounded-bl-md`}>Best<ArrowUpIcon></ArrowUpIcon></Button>
                    <Button onClick={() => setSortState('low')} variant={'ghost'}
                            className={`w-full pb-2 ${sortState === 'low' ? "bg-destructive/10" : ""} rounded-none`}>Low<ArrowDownIcon></ArrowDownIcon></Button>
                    <Button variant={'ghost'} className={'w-full rounded-none rounded-br-md pb-2'}>View
                        All <OpenInNewWindowIcon className={'mx-1'}/></Button>
                </div>
            </div>

        </div>
        <div className={'flex flex-row space-x-6 duration-1000 px-10'}>
            <TeamPercentages/>

            <TrendsIndStats/>
        </div>
    </div>
)
}

const CustomTooltip = ({
    active, payload, label
}) => {
    if (active && payload && payload.length) {
        console.log(payload)
        return (
            <div className="bg-muted/80 border border-ring rounded-md p-2">
                <p className={'button-text font based font-semibold text-center'}>{label}</p>
                <p className="font">{`Rounds Played : ${payload[0].value}`}</p>
                <p className="font">{`Rounds Won : ${payload[1].value}`}</p>

            </div>
        );
    }
    return null;
};
const LineTooltip = ({
    active, payload, label
}) => {
    if (active && payload && payload.length) {
        console.log(payload)
        return (
            <div className="bg-muted/80 border border-ring rounded-md p-2">
                <p className={'button-text font font-semibold text-center'}>{label}</p>
                <p className="font">KD / round: <span
                    className={'font based text-lg font-bold'}>{payload[1].value}</span></p>
                <p className="font ">Avg KAST: <span
                    className={'font based  text-lg font-bold'}>{payload[2].value * 100}%</span></p>
                <p className="font ">FBs / round: <span
                    className={'font based text-lg font-bold'}>{payload[0].value}</span></p>

            </div>
        );
    }

    return null;
};