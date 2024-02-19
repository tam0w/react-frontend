import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.jsx";

export function TrendsIndStats() {
    return (
        <Card className={'rounded-none rounded-b-md'}>
                <CardHeader className={'border-0 text-left mb-0 pb-4'}>
                    <CardTitle>Individual Performance</CardTitle>
                    <CardDescription><p className='text-wrap break-words'>Click on a player card for more details.</p>
                    </CardDescription>
                </CardHeader>
                <div className={'flex flex-row space-x-4 m-4 mt-0'}>
                    <CardContent className={'items-center justify-center flex gap-4 mx-0 mt-0 flex-col'}>


                        <Dialog>
                          <DialogTrigger asChild>
                              <Card className={'border-muted-foreground/80 rounded-none hover:bg-muted-foreground/5'}>

                                                <CardHeader className={''}>
                                                    <CardTitle className={'text-4xl flex items-center'}><div className={'flex flex-col'}>
                                                        <p className={'font-semibold'}>tam0w</p>
                                                        <p className={'text-lg text-muted-foreground'}>Controller</p>
                                                    </div>
                                                        <img className={'ml-4 w-[5rem]'} src='https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp'/>
                                                    </CardTitle>
                                                </CardHeader>
                                            </Card>

                          </DialogTrigger>
                          <DialogContent className="">

                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                              <p className={'text-muted-foreground'}>Name</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                    </CardContent>

                </div>
                <div className={'flex flex-row space-x-4 mx-4 mb-3 items-center justify-center'}>

                </div>

                {/*<CardHeader className={'border-0 text-left mb-0 pb-4'}>*/}
                {/*    <CardTitle>Individual Performance</CardTitle>*/}
                {/*    <CardDescription><p className='text-wrap break-words'>Click on a player card for more details.</p>*/}
                {/*    </CardDescription>*/}
                {/*</CardHeader>*/}
            </Card>
    )
}

