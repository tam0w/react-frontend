import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";
import {SubCardIndStats} from "@/pages/app/trends/SubCardIndStats.jsx";
import {useEffect, useState} from "react";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";

export function PlayerCardOverview({name, color, img}) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [mostPlayedAgent, setMostPlayedAgent] = useState(null);
      const [mostPlayedClass, setMostPlayedClass] = useState(null);
      const [agentImage, setAgentImage] = useState(null);

      useEffect(() => {
        fetch(`https://rest-api-t8pa.onrender.com/api/player/${name}/picks`)
          .then(response => response.json())
          .then(data => {
            setData(data);
            const overallData = data.overall;

            // Find the most played agent
            const maxPlayedAgent = overallData.reduce((prev, current) => (prev.value > current.value) ? prev : current);
            setMostPlayedAgent(maxPlayedAgent.name);

            // Find the most played class
            const classCount = {};
            overallData.forEach(item => {
              if (!classCount[item.role]) {
                classCount[item.role] = 0;
              }
              classCount[item.role]++;
            });
            const mostPlayedClass = Object.keys(classCount).reduce((a, b) => classCount[a] > classCount[b] ? a : b);
            setMostPlayedClass(mostPlayedClass);

            // Set the agent image
            setAgentImage(agents_images[maxPlayedAgent.name]);
            setLoading(false);
          });
      }, [name]);

    return (
        loading ? <div className={'justify-center items-center mx-1'}><ButtonSpin className={'m-3 py-8 my-9'}/></div> :
        (<CardContent className={`items-center justify-center flex gap-4 mx-0 mt-0 flex-col`}>


                        <Dialog>
                          <DialogTrigger asChild>
                              <Card className={`border-${color} rounded-none hover:bg-muted-foreground/5`}>

                                                <CardHeader className={''}>
                                                    <CardTitle className={'text-4xl flex items-center'}><div className={'flex flex-col'}>
                                                        <p className={'font-semibold'}>{name}</p>
                                                        <p className={'text-lg text-muted-foreground'}>{mostPlayedClass}</p>
                                                    </div>
                                                        <img className={'ml-4 w-[5rem]'} src={agentImage}/>
                                                    </CardTitle>
                                                </CardHeader>
                                            </Card>
                          </DialogTrigger>

                          <DialogContent className="">

                            <SubCardIndStats name={name} pickdata={data}/>
                          </DialogContent>
                        </Dialog>
                    </CardContent>)

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