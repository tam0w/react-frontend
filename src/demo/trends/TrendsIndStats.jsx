import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";
import {SubCardIndStats} from "@/demo/trends/SubCardIndStats.jsx";
import {PlayerCardOverview} from "@/demo/trends/PlayerCardOverview.jsx";

const url1 = 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp'
const url2 = 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp'
const url3 = 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp'
const url4 = 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp'
const url5 = 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp'


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

export function TrendsIndStats() {
    return (
        <Card className={'rounded-none rounded-b-md'}>
                <CardHeader className={'border-0 text-left mb-0 pb-2'}>
                    <CardTitle>Individual Performance</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Click on a player card for more details.</p>
                    </CardDescription>
                </CardHeader>
                <div className={'flex flex-row space-x-4 m-4 mt-0'}>
                    <PlayerCardOverview name={'tam0w'} color={'secondary-foreground'} img={url1}/>
                    <PlayerCardOverview name={'kyaki'} color={'secondary-foreground'} img={url2}/>
                    <PlayerCardOverview name={'hmmm'} img={url3}/>
                </div>
                <div className={'flex flex-row space-x-4 mx-4 mb-3 items-center justify-center'}>
                    <PlayerCardOverview name={'nurdrd'} color={'secondary-foreground'} img={url4}/>
                    <PlayerCardOverview name={'dog'} color={'secondary-foreground'} img={url5}/>
                </div>

                {/*<CardHeader className={'border-0 text-left mb-0 pb-4'}>*/}
                {/*    <CardTitle>Individual Performance</CardTitle>*/}
                {/*    <CardDescription><p className='text-wrap break-words'>Click on a player card for more details.</p>*/}
                {/*    </CardDescription>*/}
                {/*</CardHeader>*/}
            </Card>
    )
}

