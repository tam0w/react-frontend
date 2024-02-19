import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis} from "recharts";

const performance_indicators = [
    {kd: 1.17, kast: 0.76, fbpr: 0.53, day: 'Monday'},
    {kd: 0.94, kast: 0.86, fbpr: 0.41, day: 'Tuesday'},
    {kd: 0.74, kast: 0.62, fbpr: 0.86, day: 'Wednesday'},
    {kd: 0.89, kast: 0.64, fbpr: 0.67, day: 'Thursday'},
    {kd: 1.04, kast: 0.85, fbpr: 0.96, day: 'Friday'},
    {kd: 1.11, kast: 0.78, fbpr: 0.94, day: 'Saturday'},
    {kd: 1.41, kast: 0.89, fbpr: 0.99, day: 'Sunday'}
    ]
export function TrendsLineChart() {
    return (
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
    )
}

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