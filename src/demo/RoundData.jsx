import {Card, CardContent} from "@/components/ui/card.jsx";
import {BoxIcon, CountdownTimerIcon, HobbyKnifeIcon, InfoCircledIcon, KeyboardIcon} from "@radix-ui/react-icons";
import {useState} from "react";

export function RoundData({info, number}) {

    console.log(info[number], number)
    const current_round = info[number];

    return current_round.map((event) => {
        return <Card
              className={`border-accent-foreground/40 w-full my-2 mt-0 rounded-md ${event.team === 'team' ? "bg-secondary/60  hover:border-card-foreground/80" : "bg-destructive/10  hover:border-card-foreground/80"}`}>
            <CardContent className=''>
                <div className='flex'>
                    <h1 className='text-xl font items-center mt-5'>{event.fk}</h1>
                    {event.what === 'Kill' ? <HobbyKnifeIcon className='w-6 h-6 mt-6 mx-4 text-muted-foreground'/> : <KeyboardIcon className='w-7 h-7 mt-6 mx-4 text-muted-foreground'/>}
                    {event.what === 'Kill' ? <h1 className='text-xl font  items-center mt-5'>{event.fd}</h1> : ""}
                </div>
            </CardContent>
        </Card>
    })

    // return info.map((event) => {
    // console.log(event, "what the hell")
    //    return <Card
    //           className='border-accent-foreground/40 w-full my-4 mt-0 bg-muted-foreground/5 rounded-md hover:border-card-foreground/80'>
    //         <CardContent className=''>
    //             <div className='flex'>
    //                 <InfoCircledIcon className='w-7 h-7 mt-6 mr-4 text-muted-foreground'/>
    //                 <h1 className='button-text items-center mt-5'>{event[0]}</h1>
    //             </div>
    //         </CardContent>
    //     </Card>
    // })

}
