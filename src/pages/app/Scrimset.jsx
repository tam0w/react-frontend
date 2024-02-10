import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {RoundData} from "@/demo/RoundData.jsx";
import {DoubleArrowLeftIcon} from "@radix-ui/react-icons";
import {List} from "@radix-ui/react-navigation-menu";

export function Scrimset() {

      const [selectedValue, setSelectedValue] = useState(null);
      const [data, setData] = useState([]);
      const [allRoundData, setallRoundData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      var url = 'https://rest-api-t8pa.onrender.com/api/match'

    useEffect(() => {
            const fetchData = async () => {
              setIsLoading(true);
              try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);


                setallRoundData(data.all_round_data);

              } catch (error) {
                setError(error);
              } finally {
                setIsLoading(false);
              }
            };
            fetchData();

        }, []);




    return (
        <div className={'flex flex-row space-x-6 duration-1000 py-4 px-14'}>

            <Card className={'rounded-none rounded-b-md'}>
                <CardHeader>
                    <CardTitle>2D Match Replay:</CardTitle>
                    <CardDescription>Choose the round you would like to see.</CardDescription>
                </CardHeader>
                <CardContent className={'text-wrap'}>

                    {allRoundData.map((round, num) => (
                          <div><RoundData info={round} number={num} /></div>
                    ))}


                </CardContent>
            </Card>
        </div>
    )
}