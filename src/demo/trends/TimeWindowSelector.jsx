import {LapTimerIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";

export function TimeWindowSelector() {
    return (
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
    )
}