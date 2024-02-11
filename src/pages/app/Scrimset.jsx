import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {RoundData} from "@/demo/RoundData.jsx";
import {DoubleArrowLeftIcon} from "@radix-ui/react-icons";
import {List} from "@radix-ui/react-navigation-menu";
import {Slider} from "@/components/ui/slider.jsx";

export function Scrimset() {

      const [selectedValue, setSelectedValue] = useState(4);
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      const [dataObjects, setDataObjects] = useState({})
      var url = 'https://rest-api-t8pa.onrender.com/api/match'

    useEffect(() => {
            const fetchData = async () => {
              setIsLoading(true);
              try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                // setallRoundData(data.all_round_data);
                const allRoundData = data.all_round_data;
                let dataObjects = {};
                allRoundData.map((round, round_num) => {
                    dataObjects[round_num+1] = round.map((event, event_num) => {
                        return {
                            event_num: event_num+1,
                            fk: event[0],
                            fd: event[1],
                            time: event[2],
                            team: event[3],
                            what: event[4]
                        }
                    })
                })
                setDataObjects(dataObjects);
              } catch (error) {
                setError(error);
              } finally {
                setIsLoading(false);
              }
            };
            fetchData();

        }, []);


    const paragraphs = Array.from({length: 23}, (_, i) => <RoundData info={dataObjects} number={i}/>);


    return (
        <div className={'flex flex-row space-x-6 duration-1000 py-4 px-14'}>

            <Card className={'rounded-none rounded-b-md'}>
                <CardHeader>
                    <CardTitle>2D Match Replay:</CardTitle>
                    <CardDescription>Choose the round you would like to see.</CardDescription>
                    <Slider
                            defaultValue={[selectedValue]}
                            min={1}
                            max={23}
                            step={1}
                            onValueChange={(value) => {
                                setSelectedValue(value);
                            }}
                            className={'py-2'}/>
                    <div className={'items-center justify-center flex'}>
                        <h1 className={'normal flex-row'}>Round {selectedValue}</h1>
                    </div>

                </CardHeader>
                <CardContent className={'text-wrap columns-2'}>
                    {dataObjects[selectedValue] ? <RoundData info={dataObjects} number={selectedValue}/> : "Loading..."}

                </CardContent>
            </Card>
        </div>
    )
}