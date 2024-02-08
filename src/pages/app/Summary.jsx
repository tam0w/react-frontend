import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Sunday', uv: 400, pv: 2400, amt: 2500},{name: 'Monday', uv: 300, pv: 2500, amt: 2100},{name: 'Tuesday', uv: 100, pv: 2400, amt: 2400},{name: 'Wednesday', uv: 350, pv: 2400, amt: 1400},];


export function Summary() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  function displayStuff() {
      if (loading) {
          return (
              <div className='flex w-full items-center justify-center animate-pulse'>
              <ButtonSpin/>
                </div>)
      }
        else {
            return (
                <div className={`flex flex-row py-4 px-14 space-x-6 duration-500`}>
                    <Card className={'rounded-none rounded-b-md'}>
                        <CardHeader>
                            <CardTitle>User Info</CardTitle>
                            <CardDescription>Basic User Data:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                    <Card className={'rounded-none rounded-b-md'}>
                        <CardHeader>
                            <CardTitle>Scrims Played:</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                                <Line type="linear" dataKey="uv" stroke="#ffffff" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                              </LineChart>
                        </CardContent>
                        <CardFooter>
                            <p>Scrims you've played in the last week.</p>
                        </CardFooter>
                    </Card>
                    <Card className={'rounded-none rounded-b-md'}>
                        <CardHeader>
                            <CardTitle>User Info</CardTitle>
                            <CardDescription>Basic User Data:</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                </div>
            )
        }
  }

    return (
        displayStuff()
    )
}