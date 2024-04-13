import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {MapCard} from "@/pages/app/mapwise/MapCard.jsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.jsx";
import {useState} from "react";
import {TextWhiteBox} from "@/localComponents/TextWhiteBox.jsx";

const maps = {
    split:
        {name: 'Split',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdfd43bd79d9b3410/5eabe9fea20afe612d82f833/split3.jpg?auto=webp&width=915',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/f/ff/Split_minimap.png'
        },
    bind:
        {name: 'Bind',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta6be60823002f711/5eabe92d4398082ffe23fdb5/bind5.jpg?auto=webp&width=915',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/0/0b/Bind_minimap.png'
        },
    ascent:
        {name: 'Ascent',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9e24fe356d0faf81/5eabe9c497c0a55d71b7fceb/ascent2.jpg?auto=webp&width=915',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/0/04/Ascent_minimap.png'
        },
    breeze:
        {name: 'Breeze',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc1e8e8a2228fef3a/607f9e3e92f0063e5c0711cb/breeze_6.jpg?auto=webp&width=915',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/7/78/Breeze_minimap.png'
        },
    icebox:
        {name: 'Icebox',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt31a23d8039f4b397/626c2e248c90c334d0d403ab/04-2022-Icebox-11.jpg?auto=webp&width=915',
        sites: 2,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/c/cf/Icebox_minimap.png'
        },
    lotus:
        {name: 'Lotus',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0bb2058c88892462/63b8a805ade3a64c67746408/Lotus_Screenshot_1.jpg?auto=webp&width=915',
        sites: 3,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/b/be/Lotus_minimap.png'
        },
    sunset:
        {name: 'Sunset',
        img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfd30724baf6d6273/64e9335dd0af545809a84bd6/Sunset_Screenshot_3.png?auto=webp&width=915',
        sites: 3,
        minimap: 'https://static.wikia.nocookie.net/valorant/images/7/7b/Sunset_minimap.png'
        }
}


export function MapWise() {
  const mapKeys = Object.keys(maps);
  const [activeMap, setActiveMap] = useState(mapKeys[0]);

  return (
    <div className={`flex flex-col m-14 my-4 duration-1000 w-full border border-ring mr-8`}>
      <div className={`flex flex-row duration-1000 w-full px-4 justify-between`}>
        <CardHeader>
            <CardTitle className={``}>Map Data: <span className={'font-semibold'}>{activeMap.toUpperCase()}</span></CardTitle>
          <CardDescription className={`space-y-4 pt-4`}>
              <div className={'flex flex-row space-x-4'}>
              <div className={'space-y-4 w-72'}>
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              </div>
              <div className={'space-y-4 w-72'}>
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              </div>
              <div className={'space-y-4 w-72'}>
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              <TextWhiteBox text={'Sites: ' + maps[activeMap].sites} className={'h-8 items-center justify-center'} textClass={'items-center justify-center'} />
              </div>
              </div>
          </CardDescription>
        </CardHeader>

        <Carousel opts={{align: "start", loop: true,}} className={'p-2 m-4 mr-12 mt-8'} mapKeys={mapKeys}
                  activeMap={activeMap} setActiveMap={setActiveMap}>
          <CarouselContent >
            {Object.entries(maps).map(([key, value], index) => {
              return (
                <CarouselItem key={key}
                  className={'w-16'}
                >
                  <MapCard map={value} className={''}/>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Card className={'border-0 justify-center'}>
        <CardContent className={'m-0 p-0'}>
          <div className={`flex flex-row space-x-20 duration-1000 py-4 px-14 w-full justify-center`}>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}