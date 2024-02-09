import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";


export function MatchReport() {

    let url = 'https://rest-api-t8pa.onrender.com/api/match'

    // Declare a new state variable to store the fetched data
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {

            setData(data);
            console.log(data);
        })
        .catch((error) => console.error('Error:', error));

    }, []);

    function getData() {
        if (data) {
            return data.anchor_times.map(time => <p>{time}</p>)

    }
        }


    return (
        <div className={'flex flex-row space-x-6 duration-1000 py-4 px-14'}>

                    <Card className={'rounded-none rounded-b-md'}>
                        <CardHeader>
                            <CardTitle>User Info</CardTitle>
                            <CardDescription>Basic User Data:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{getData()}</p>
                        </CardContent>
                    </Card>
        </div>
    )
}