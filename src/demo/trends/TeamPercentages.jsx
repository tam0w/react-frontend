import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {ArrowDownIcon, ArrowUpIcon} from "@radix-ui/react-icons";

export function TeamPercentages() {
    return (
        <Card className={'rounded-none rounded-b-md px-1'}>
                <CardHeader className={'border-0 text-left mb-0 pb-4'}>
                <CardTitle>Team Metrics</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Recent measures of team-stats in various metrics.</p></CardDescription>
                </CardHeader>
                <div className={'flex flex-row space-x-4 mx-4 mb-3'}>
                <CardContent className={'items-center justify-center flex gap-4 mx-0 mt-0 flex-col'}>
                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex'}>{"Round Winrate"}: {70}% <ArrowDownIcon className={'w-8 h-8 text-red-400'}/></CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex'}>{"5v4 Conversion"}: {85}% <ArrowUpIcon className={'w-8 h-8 text-secondary-foreground'}/></CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex '}>{"4v5 Conversion"}: {43}% <ArrowUpIcon className={'w-8 h-8 text-secondary-foreground'}/></CardTitle>
                        </CardHeader>
                    </Card>

                </CardContent>
                <CardContent className={'items-center justify-center flex gap-4 mx-0 mt-0 flex-col'}>

                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex'}>{"Retake Winrate"}: {40}% <ArrowDownIcon className={'w-8 h-8 text-red-400'}/></CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex'}>{"Post-plant"}: {73}% <ArrowUpIcon className={'w-8 h-8 text-secondary-foreground'}/></CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className={'w-[19rem] border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-xl flex'}>{"Avg. Trade Rate"}: {54}% <ArrowDownIcon className={'w-8 h-8 text-red-400'}/></CardTitle>
                        </CardHeader>
                    </Card>

                </CardContent>
                    </div>
            </Card>
    )
}