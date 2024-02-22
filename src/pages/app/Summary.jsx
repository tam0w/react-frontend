import {TeamPercentages} from "@/demo/trends/TeamPercentages.jsx";
import {TrendsIndStats} from "@/demo/trends/TrendsIndStats.jsx";
import {TrendsRadarChart} from "@/demo/trends/TrendsRadarChart.jsx";
import {TrendsLineChart} from "@/demo/trends/TrendsLineChart.jsx";
import {TimeWindowSelector} from "@/demo/trends/TimeWindowSelector.jsx";
import {AgentsPlayedTable} from "@/demo/trends/AgentsPlayedTable.jsx";


export function Summary() {

    return (

        <div className={'flex flex-col py-4 space-y-4 w-screen'}>

            <div className={'flex flex-row space-x-6 duration-1000 px-10 justify-center'}>

                <div className={'flex flex-col text-center gap-2'}>

                    <TimeWindowSelector/>
                    <TrendsRadarChart/>
                </div>

                <TrendsLineChart/>
                <AgentsPlayedTable/>
            </div>

            <div className={'flex flex-row space-x-6 duration-1000 px-10 justify-center'}>

                <TeamPercentages/>
                <TrendsIndStats/>
            </div>
        </div>
)
}

