import {Card, CardContent, CardHeader} from "@/components/ui/card.jsx";
import {TextWhiteBox} from "@/localComponents/TextWhiteBox.jsx";

export function MapCard({map, className}) {
    return (
        <Card className={`border-0 rounded-t-sm rounded-b-none ${className}`}>
          <CardHeader className={`p-0`}>
            <img src={map.img} className={'h-64 rounded-t-sm border-4 border-muted'}/>
          </CardHeader>
          <CardContent className={'space-y-2 px-2'}>
          </CardContent>
        </Card>
    )
}