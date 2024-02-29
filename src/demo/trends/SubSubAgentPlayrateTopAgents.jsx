import {useEffect, useState} from "react";

const agents_images = {
  Breach: 'https://i.postimg.cc/7h4kP8wC/breach.png',
  Jett: 'https://i.postimg.cc/CLmg0Qt1/jett.webp',
  Kayo: 'https://i.postimg.cc/tCXjLjBw/kayo.png',
  Killjoy: 'https://i.postimg.cc/fLxGr2mM/kj.png',
  Astra: 'https://i.postimg.cc/5y4Rkxfm/astra.webp',
    Sage: 'https://i.postimg.cc/Kv9dwgk3/sage.png',
    Cypher: 'https://i.postimg.cc/44PMHh12/cypher.png',
    Viper: 'https://i.postimg.cc/qRXFLtHR/viper.png',
    Omen: 'https://i.postimg.cc/J0x91spg/omen.webp',
    Brimstone: 'https://i.postimg.cc/cCcNr9LF/brim.webp',
    Sova: 'https://i.postimg.cc/NMwVm6VS/sova.png',
    Chamber: 'https://i.postimg.cc/zDwNtBFT/chamber.png',
    Raze: 'https://i.postimg.cc/mgt0s2CX/raze.png',
    Phoenix: 'https://i.postimg.cc/ZYLkPQJc/phx.png',
    Yoru: 'https://i.postimg.cc/90LN6vMH/yoru.png',
    Skye: 'https://i.postimg.cc/QdwvxGqX/skye.png',
  Iso: 'https://static.wikia.nocookie.net/valorant/images/b/b7/Iso_icon.png/revision/latest/scale-to-width-down/75?cb=20231031131018',
    Harbor: 'https://i.postimg.cc/y8GCgS7C/harbour.webp',
Neon : 'https://i.postimg.cc/Y0M5K6zY/neon.webp',
    Gekko: 'https://i.postimg.cc/4xyTx1k1/ge.png',
    Reyna: 'https://i.postimg.cc/pXVwsBTt/reyna.png',
    Fade: 'https://i.postimg.cc/FR5tG5fP/fade.png',
    Deadlock: 'https://i.postimg.cc/nLQbvcLj/deadlock.png',
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

