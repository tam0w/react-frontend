import {Card, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {ArrowDownIcon} from "@radix-ui/react-icons";

export function TextWhiteBox({className, textClass, text, icon}) {
    return (
        <Card className={`border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5`}>
            <CardHeader className={`${className}`}>
                <CardTitle className={`text-lg ${textClass} flex`}>{text} {icon}</CardTitle>
            </CardHeader>
        </Card>
    )
}