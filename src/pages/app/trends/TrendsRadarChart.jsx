import {Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip} from "recharts";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";

const mapwise_playdata = [{map: 'split', total_scrims: 18, rounds: 18*24, round_wins:14*18, round_losses: 18*10},
    {map: 'icebox', total_scrims: 12, rounds: 12*24, round_wins:14*12, round_losses: 12*10},
    {map: 'ascent', total_scrims: 20, rounds: 20*24, round_wins:3*20, round_losses: 20*17},
    {map: 'lotus', total_scrims: 24, rounds: 24*24, round_wins:14*24, round_losses: 24*10},
    {map: 'breeze', total_scrims: 6, rounds: 6*24, round_wins:14*6, round_losses: 6*10},
    {map: 'sunset', total_scrims: 10, rounds: 10*24, round_wins:14*10, round_losses: 10*10},
    {map: 'bind', total_scrims: 21, rounds: 21*24, round_wins:14*21, round_losses: 21*10}]
export function TrendsRadarChart() {
    return (
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

