import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {ArrowDownIcon, ArrowUpIcon} from "@radix-ui/react-icons";
import {TextWhiteBox} from "@/demo/TextWhiteBox.jsx";

export function TeamPercentages() {
    return (
        <Card className={'rounded-none rounded-b-md px-1'}>
                <CardHeader className={'border-0 text-left mb-0 pb-4'}>
                <CardTitle>Team Metrics</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Recent measures of team-stats in various metrics.</p></CardDescription>
                </CardHeader>
                <div className={'flex flex-row space-x-4 mx-4 mb-3'}>
                <CardContent className={'items-center justify-center flex gap-4 mx-0 mt-0 flex-col'}>

                    <TextWhiteBox text={'Round Winrate: 70%'} icon={<ArrowDownIcon className={'w-8 h-8 text-red-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'}/>

                    <TextWhiteBox text={'5v4 Conversion: 85%'} icon={<ArrowUpIcon className={'w-8 h-8 text-green-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'} />

                    <TextWhiteBox text={'4v5 Conversion: 45%'} icon={<ArrowUpIcon className={'w-8 h-8 text-green-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'} />

                </CardContent>
                <CardContent className={'items-center justify-center flex gap-4 mx-0 mt-0 flex-col'}>
                    <TextWhiteBox text={'Retake Winrate: 40%'} icon={<ArrowDownIcon className={'w-8 h-8 text-red-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'} />

                    <TextWhiteBox text={'Post-plant: 73%'} icon={<ArrowDownIcon className={'w-8 h-8 text-red-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'} />

                    <TextWhiteBox text={'Avg. Trade Rate: 54%'} icon={<ArrowUpIcon className={'w-8 h-8 text-green-400'}/>}
                    className={'w-[19rem]'} textClass={'text-xl'} />

                </CardContent>
                    </div>
            </Card>
    )
}