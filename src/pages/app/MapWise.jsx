import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {MapCard} from "@/pages/app/mapwise/MapCard.jsx";

const maps = {
    split:
        {name: 'Split',
        img: 'https://static.wikia.nocookie.net/valorant/images/d/d6/Loading_Screen_Split.png',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/f/ff/Split_minimap.png'
        },
    bind:
        {name: 'Bind',
        img: 'https://static.wikia.nocookie.net/valorant/images/2/23/Loading_Screen_Bind.png',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/0/0b/Bind_minimap.png'
        },
    ascent:
        {name: 'Ascent',
        img: 'https://static.wikia.nocookie.net/valorant/images/e/e7/Loading_Screen_Ascent.png',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/0/04/Ascent_minimap.png'
        },
    breeze:
        {name: 'Breeze',
        img: 'https://static.wikia.nocookie.net/valorant/images/1/10/Loading_Screen_Breeze.png',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/7/78/Breeze_minimap.png'
        },
    icebox:
        {name: 'Icebox',
        img: 'https://static.wikia.nocookie.net/valorant/images/1/13/Loading_Screen_Icebox.png',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/c/cf/Icebox_minimap.png'
        },
    lotus:
        {name: 'Lotus',
        img: 'https://static.wikia.nocookie.net/valorant/images/d/d0/Loading_Screen_Lotus.png',
        sites: 3,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/b/be/Lotus_minimap.png'
        },
    sunset:
        {name: 'Sunset',
        img: 'https://static.wikia.nocookie.net/valorant/images/5/5c/Loading_Screen_Sunset.png',
        sites: 3,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/7/7b/Sunset_minimap.png'
        }
}


export function MapWise() {
    return (
        <div className={`flex flex-row space-x-6 duration-1000 py-4 px-14 w-full`}>

            <Card className={'rounded-none rounded-b-md w-full'}>
                        <CardHeader>
                            <CardTitle className={`text-center`}>Map Data</CardTitle>
                            <CardDescription className={`text-center`}>Click on a map for more details.</CardDescription>
                        </CardHeader>
                <CardContent className={'m-0 p-0'}>

                    <div className={`flex flex-row space-x-14 duration-1000 py-4 px-14 w-full justify-center`}>
                        <MapCard map={maps.sunset}/>
                        <MapCard map={maps.lotus}/>
                        <MapCard map={maps.icebox}/>
                        <MapCard map={maps.breeze}/>
                    </div>

                    <div className={`flex flex-row space-x-20 duration-1000 py-4 px-14 w-full justify-center`}>

                        <MapCard map={maps.bind}/>
                        <MapCard map={maps.ascent}/>
                        <MapCard map={maps.split}/>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}