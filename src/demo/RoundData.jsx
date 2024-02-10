import {Card, CardContent} from "@/components/ui/card.jsx";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {useState} from "react";

export function RoundData({info, number}) {

    console.log(info, number)

    return info.map((event) => {
    console.log(event, "what the hell")
       return <Card
              className='border-accent-foreground/40 w-full my-4 mt-0 bg-muted-foreground/5 rounded-md hover:border-card-foreground/80'>
            <CardContent className=''>
                <div className='flex'>
                    <InfoCircledIcon className='w-7 h-7 mt-6 mr-4 text-muted-foreground'/>
                    <h1 className='button-text items-center mt-5'>{event[0]}</h1>
                </div>
            </CardContent>
        </Card>
    })

}
