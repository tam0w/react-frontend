import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";
import {SubCardIndStats} from "@/demo/trends/SubCardIndStats.jsx";
import {PlayerCardOverview} from "@/demo/trends/PlayerCardOverview.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";

const url1 = 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp'
const url2 = 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp'
const url3 = 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp'
const url4 = 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp'
const url5 = 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp'



export function TrendsIndStats() {

    const [loading, setLoading] = useState([true,true,true,true,true])

    async function getPickData(name, num) {
        const response = await fetch(`https://rest-api-t8pa.onrender.com/api/player/${name}/picks`);
        const data = await response.json();
        let newLoading = [...loading];
        newLoading[num] = false;
        setLoading(newLoading);
        console.log("TEST", data, name);
        return data;
    }

    const allLoaded = loading.every((item) => item === false)

        console.log("latest loads me huwa ki", getPickData('tam0w',0))

    return (
        <Card className={'rounded-none rounded-b-md px-1'}>

            {allLoaded ? (<div className={'p-[10.7rem] px-[20rem]'}>
                    <ButtonSpin className={'bg-ring/10'}/>
            </div>
            ) : (
                <div>
                    <CardHeader className={'border-0 text-left mb-0 pb-2'}>
                        <CardTitle>Individual Performance</CardTitle>
                        <CardDescription>
                            <p className='text-wrap break-words bg'>Click on a player card for more details.</p>
                        </CardDescription>
                    </CardHeader>
                    <div className={'flex flex-row space-x-4 m-4 mt-0'}>
                        <PlayerCardOverview name={'tam0w'} color={'secondary-foreground'}
                                            img={'https://i.postimg.cc/hvQ54mP0/sova.png'} data={getPickData(name,0)}/>
                        <PlayerCardOverview name={'kyaki'} color={'secondary-foreground'} img={url2} data={getPickData(name,1)}/>
                        <PlayerCardOverview name={'hmmm'} img={url3} data={getPickData(name,2)}/>
                    </div>
                    <div className={'flex flex-row space-x-4 mx-4 mb-3 items-center justify-center'}>
                        <PlayerCardOverview name={'nurdrd'} color={'secondary-foreground'} img={url4} data={getPickData(name,3)}/>
                        <PlayerCardOverview name={'dog'} color={'secondary-foreground'} img={url5} data={getPickData(name,4)}/>
                    </div>
                </div>
            )
            }

            </Card>
    )
}

const agents_images = {
  Breach: 'https://i.postimg.cc/zGTYSsNk/breach.png',
  Jett: 'https://i.postimg.cc/B6nW3tKh/jett.png',
  Kayo: 'https://i.postimg.cc/8zQq5Zvf/kayo.png',
  Killjoy: 'https://i.postimg.cc/Gt4ZBNzG/kj.png',
  Astra: 'https://i.postimg.cc/hj2BQVnW/astra.png',
    Sage: 'https://i.postimg.cc/Dz5DxFM1/sage.png',
    Cypher: 'https://i.postimg.cc/9fV5xLFH/cypher.png',
    Viper: 'https://i.postimg.cc/FRR6qqM8/viper.png',
    Omen: 'https://i.postimg.cc/Gt66vQSN/omen.png',
    Brimstone: 'https://i.postimg.cc/Kv6yTZ6z/brim.png',
    Sova: 'https://i.postimg.cc/hvQ54mP0/sova.png',
    Chamber: 'https://i.postimg.cc/4N7gnKFq/chamber.png',
    Raze: 'https://i.postimg.cc/yYSMsMDz/raze.png',
    Phoenix: 'https://i.postimg.cc/59Gcc4N3/phx.png',
    Yoru: 'https://i.postimg.cc/z3mPyfyY/yoru.png',
    Skye: 'https://i.postimg.cc/V6Vhcg16/skye.png',
  Iso: 'https://i.postimg.cc/J0gCPmtp/iso.png',
    Harbor: 'https://i.postimg.cc/R0Rr2wN6/harbour.png',
Neon : 'https://i.postimg.cc/tg9wd72X/neon.png',
    Gekko: 'https://i.postimg.cc/VsHwY94X/gekko.png',
    Reyna: 'https://i.postimg.cc/nh4NQqKR/reyna.png',
    Fade: 'https://i.postimg.cc/507h215f/fade.png',
    Deadlock: 'https://i.postimg.cc/2y3fQ3jq/deadlock.png',
}