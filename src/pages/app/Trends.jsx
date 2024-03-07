import {TeamPercentages} from "@/pages/app/trends/TeamPercentages.jsx";
import {TrendsIndStats} from "@/pages/app/trends/TrendsIndStats.jsx";
import {TrendsRadarChart} from "@/pages/app/trends/TrendsRadarChart.jsx";
import {TrendsLineChart} from "@/pages/app/trends/TrendsLineChart.jsx";
import {TimeWindowSelector} from "@/pages/app/trends/TimeWindowSelector.jsx";
import {AgentsPlayedTable} from "@/pages/app/trends/AgentsPlayedTable.jsx";


export function Trends() {

    return (

        <div className={'flex flex-col py-4 space-y-4 w-full px-10 items-center'}>

            <div className={'flex flex-row space-x-6 duration-1000 '}>

                <div className={'flex flex-col text-center gap-2'}>

                    <TimeWindowSelector/>
                    <TrendsRadarChart/>
                </div>

                <TrendsLineChart/>
                <AgentsPlayedTable/>
            </div>

            <div className={'flex flex-row space-x-6 duration-1000 '}>

                <TeamPercentages/>
                <TrendsIndStats/>
            </div>
        </div>
)
}

