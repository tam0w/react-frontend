import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";
import {SubCardIndStats} from "@/pages/app/trends/SubCardIndStats.jsx";
import {PlayerCardOverview} from "@/pages/app/trends/PlayerCardOverview.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/localComponents/ButtonSpin.jsx";

const url1 = 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp'
const url2 = 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp'
const url3 = 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp'
const url4 = 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp'
const url5 = 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp'



export function TrendsIndStats() {

    const playerNames = ['tam0w', 'kyaki', 'hmmm', 'nurdrd', 'dog']



    return (
        <Card className={'rounded-none rounded-b-md px-1'}>

                <div>
                    <CardHeader className={'border-0 text-left mb-0 pb-2'}>
                        <CardTitle>Individual Performance</CardTitle>
                        <CardDescription>
                            <p className='text-wrap break-words bg'>Click on a player card for more details.</p>
                        </CardDescription>
                    </CardHeader>
                    <div className={'flex flex-row space-x-4 m-4 mt-0'}>
                        <PlayerCardOverview name={playerNames[0]} color={'secondary-foreground'}
                                            img={'https://i.postimg.cc/hvQ54mP0/sova.png'} />
                        <PlayerCardOverview name={playerNames[1]} color={'secondary-foreground'} img={url2} />
                        <PlayerCardOverview name={playerNames[2]} img={url3} />
                    </div>
                    <div className={'flex flex-row space-x-4 mx-4 mb-3 items-center justify-center'}>
                        <PlayerCardOverview name={playerNames[3]} color={'secondary-foreground'} img={url4} />
                        <PlayerCardOverview name={playerNames[4]} color={'secondary-foreground'} img={url5} />
                    </div>
                </div>


            </Card>
    )
}
