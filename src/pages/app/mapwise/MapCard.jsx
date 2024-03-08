import {Card, CardContent, CardHeader} from "@/components/ui/card.jsx";
import {TextWhiteBox} from "@/demo/TextWhiteBox.jsx";

export function MapCard({map, className}) {
    return (
        <Card className={`border-0 rounded-t-sm rounded-b-none ${className}`}>
          <CardHeader className={`p-0`}>
            <img src={map.img} className={'h-64 rounded-t-sm'}/>
            <h1 className={`py-2 text-center normal font-semibold font`}>{map.name}</h1>
          </CardHeader>
          <CardContent className={'space-y-2 px-2'}>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-2 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-2 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-2 my-0'}/>
            <TextWhiteBox text={map.sites} textClass={'text-center'} icon={'sites'} className={'py-2 my-0'}/>
          </CardContent>
        </Card>
    )
}