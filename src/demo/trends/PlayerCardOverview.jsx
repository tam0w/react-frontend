import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";
import {SubCardIndStats} from "@/demo/trends/SubCardIndStats.jsx";

export function PlayerCardOverview({name, color, img}) {
    return (
                    <CardContent className={`items-center justify-center flex gap-4 mx-0 mt-0 flex-col`}>


                        <Dialog>
                          <DialogTrigger asChild>
                              <Card className={`border-${color} rounded-none hover:bg-muted-foreground/5`}>

                                                <CardHeader className={''}>
                                                    <CardTitle className={'text-4xl flex items-center'}><div className={'flex flex-col'}>
                                                        <p className={'font-semibold'}>{name}</p>
                                                        <p className={'text-lg text-muted-foreground'}>Controller</p>
                                                    </div>
                                                        <img className={'ml-4 w-[5rem]'} src={img}/>
                                                    </CardTitle>
                                                </CardHeader>
                                            </Card>
                          </DialogTrigger>

                          <DialogContent className="">

                            <SubCardIndStats name={name}/>
                          </DialogContent>
                        </Dialog>
                    </CardContent>
    )
}