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
    PolarGrid, PolarAngleAxis, Legend
} from 'recharts';

const mapwise_playdata = [{map: 'split', total_scrims: 18, rounds: 18*24, round_wins:14*18, round_losses: 18*10},
    {map: 'icebox', total_scrims: 12, rounds: 12*24, round_wins:14*12, round_losses: 12*10},
    {map: 'ascent', total_scrims: 20, rounds: 20*24, round_wins:14*20, round_losses: 20*10},
    {map: 'lotus', total_scrims: 24, rounds: 24*24, round_wins:14*24, round_losses: 24*10},
    {map: 'breeze', total_scrims: 6, rounds: 6*24, round_wins:14*6, round_losses: 6*10},
    {map: 'sunset', total_scrims: 10, rounds: 10*24, round_wins:14*10, round_losses: 10*10},
    {map: 'bind', total_scrims: 21, rounds: 21*24, round_wins:14*21, round_losses: 21*10}]


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
            <CardHeader>
                <CardTitle>User Info</CardTitle>
                <CardDescription>Basic User Data:</CardDescription>
            </CardHeader>
            <CardContent>
                <RadarChart outerRadius={90} width={730} height={250} data={mapwise_playdata}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="map" />
                  {/*<PolarRadiusAxis angle={30} domain={[0, 150]} />*/}
                  <Radar name="Rounds Played" dataKey="rounds" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Rounds Won" dataKey="round_wins" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
            </CardContent>
        </Card>
    </div>)
}