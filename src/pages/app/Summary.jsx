import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";
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
    PolarGrid, PolarAngleAxis, Legend, Cross, ReferenceLine, LabelList
} from 'recharts';
import {Button} from "@/components/ui/button.jsx";

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


export function Summary() {

    // let url = 'https://rest-api-t8pa.onrender.com/api/match'
    // const [data, setData] = useState();
    const [Loading, setLoading] = useState()


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


    return (<div className={'flex flex-row space-x-6 duration-1000 py-4 px-14'}>

        <Card className={'rounded-none rounded-b-md'}>
            <CardHeader className={'pb-0 mb-0'}>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription><p className='text-wrap break-words'>Trends of various performance metrics in the
                    time-frame.</p></CardDescription>
            </CardHeader>
            <CardContent className={'items-center justify-center flex p-4 m-0'}>
                <LineChart width={800} height={350} data={performance_indicators} stroke="#f3f3f3">
                    <XAxis dataKey={'day'} stroke="#fcfdfd" tickLine={false} type={'category'} interval={0}
                           tickMargin={10}/>
                    <Line strokeWidth={2} dataKey={'fbpr'} stroke='#a377d4' dot={false}/>
                    <Line strokeWidth={2} dataKey={'kd'} stroke='#6fc894' dot={false}/>
                    <Line strokeWidth={2} dataKey={'kast'} stroke='#d36fa7' dot={false}/>
                    <ReferenceLine y={1} stroke="#ffffff" strokeOpacity={0.8} strokeDasharray={18}/>

                    <Legend verticalAlign={'top'}/>
                    <Tooltip content={<LineTooltip/>}/>
                </LineChart>
            </CardContent>
        </Card>
        <div className={'flex flex-col text-center gap-4'}>
            <div className={'text-primary-foreground space-y-1 font-semibold'}>
            <p>Data Timeframe:</p>

            <div className={'flex-row w-full justify-stretch'}>
            <Button className={'rounded-none'}>Days</Button>
            <Button className={'rounded-none'}>Month</Button>
            <Button className={'rounded-none'}>Seasonal</Button>
            </div>
            </div>
            <Card className={'rounded-none rounded-b-md'}>
                <CardHeader className={'pb-0 mb-0'}>
                    <CardTitle>Scrims Played</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Mapwise breakdown of practice matches <br/>played.
                    </p></CardDescription>
                </CardHeader>
                <CardContent className={'p-4 mt-0 pt-0'}>
                    <RadarChart outerRadius={90} width={290} height={250} data={mapwise_playdata}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="map" stroke="#f3f3f3"/>
                        <Radar name="Rounds Played" dataKey="rounds" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3}/>
                        <Radar name="Rounds Won" dataKey="round_wins" stroke="#82ca9d" fill="#82ca9d" fillOpacity={1}/>
                        <Tooltip offset={120} content={<CustomTooltip/>}/>
                        <Legend height={15}/>
                    </RadarChart>
                </CardContent>
            </Card>
    </div>

</div>)
}

const CustomTooltip = ({active, payload, label}) => {
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
const LineTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        console.log(payload)
        return (
            <div className="bg-muted/80 border border-ring rounded-md p-2">
                <p className={'button-text font based font-semibold text-center'}>{label}</p>
                <p className="font">KD / round: <span className={' font  based text-lg '}>{payload[1].value}</span> </p>
                <p className="font ">Avg KAST: <span className={' font based  text-lg'}>{payload[2].value*100}%</span> </p>
                <p className="font ">FBs / round: <span className={' based  font text-lg'}>{payload[0].value}</span> </p>

      </div>
    );
  }

  return null;
};