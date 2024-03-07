import {Card, CardContent, CardHeader} from "@/components/ui/card.jsx";
import {TextWhiteBox} from "@/demo/TextWhiteBox.jsx";

export function MapCard({map}) {
    return (
        <Card className={'rounded-none rounded-b-md'}>
          <CardHeader className={`p-0`}>
            <img src={map.img} className={''}/>
            <h1 className={`text-center button-text font`}>{map.name}</h1>
          </CardHeader>
          <CardContent className={'space-y-2 px-2'}>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-0 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-0 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-0 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-0 my-0'}/>
          </CardContent>
        </Card>
    )
}