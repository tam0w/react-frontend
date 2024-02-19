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
import {TrendsRadarChart} from "@/demo/trends/TrendsRadarChart.jsx";
import {TrendsLineChart} from "@/demo/trends/TrendsLineChart.jsx";
import {TimeWindowSelector} from "@/demo/trends/TimeWindowSelector.jsx";


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
                <TimeWindowSelector/>
                <TrendsRadarChart/>
            </div>

            <TrendsLineChart/>

            <AgentsPlayedTable/>

        </div>
        <div className={'flex flex-row space-x-6 duration-1000 px-10'}>
            <TeamPercentages/>

            <TrendsIndStats/>
        </div>
    </div>
)
}

