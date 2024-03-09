import {Card, CardContent} from "@/components/ui/card.jsx";
import {HobbyKnifeIcon, KeyboardIcon} from "@radix-ui/react-icons";
import {useState} from "react";

export function RoundData({info, number}) {

    console.log(info[number], number)
    const current_round = info[number];

    return current_round.map((event) => {
        return <Card
              className={`border-accent-foreground/40 w-full rounded-md ${event.team === 'team' ? "bg-secondary/60  hover:border-card-foreground/80" : "bg-destructive/10  hover:border-card-foreground/80"}`}>
            <CardContent className=''>
                <div className='flex items-center justify-end'>

                    <h1 className='text-lg font'>{event.fk}</h1>
                    {event.what === 'Kill' ? <HobbyKnifeIcon className='w-5 h-5 mx-4 mb-0 py-0 text-muted-foreground'/> : <KeyboardIcon className='w-7 h-7 mx-4 text-muted-foreground'/>}
                    {event.what === 'Kill' ? <h1 className='text-xl font'>{event.fd}</h1> : ""}
                    <h1 className='text-xl font pl-10 text-right'>[{event.time}s]</h1>
                </div>
            </CardContent>
        </Card>
    })


}
