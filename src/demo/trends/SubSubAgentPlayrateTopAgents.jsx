import {useEffect, useState} from "react";

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


export function SubSubAgentPlayrateTopAgents({currentMap, name, data}) {

    return (
        <div className={'space-y-5'}>
          {data.map((agent, index) => {

            if (index === 0) {
              return (
              <div key={index} className={'flex flex-row items-center justify-center h-20'}>
                <img src={agents_images[agent.name]} className={'justify-center items-center w-20 h-20'}/>
              </div>
            )
            }
          })
          }
          <div className={'flex flex-row space-x-2 items-center justify-center w-52 h-14 pb-4'}>
            {data.map((agent, index) => {
              if (index < 4 && index > 0){
              return (
              <div key={index} className={'flex flex-row items-center justify-center'}>
                <img src={agents_images[agent.name]} className={'h-14'}/>
              </div>
            )
            }
            }
            )}
          </div>

        </div>
    )
}

