import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArrowDownIcon, ArrowUpIcon, OpenInNewWindowIcon} from "@radix-ui/react-icons";

export function AgentsPlayedTable() {
    return (
        <div className={'flex flex-col text-center'}>
          <Table className={'border-b-0'}>
            <TableHeader>
              <TableRow className={'border-muted-foreground/30'}>
                <TableHead className="text-muted-foreground w-[100px]">No.</TableHead>
                <TableHead className={'px-8 text-muted-foreground'}>Agent</TableHead>
                <TableHead className={'text-muted-foreground py-4'}>Win <br/> Rate</TableHead>
                <TableHead
                    className=" text-muted-foreground py-4 text-right pr-6">Times <br/> Played</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className={''}>

              {
                performanceData.map((info, index) => {
                      if (index + 1 < 8)
                        return (<TableRow className={'border-muted-foreground/30 h-12'}>
                          <TableCell className={'text-left text-card-foreground'}>
                            {sortState === 'high' ? index + 1 : performanceData.length - index}
                          </TableCell>
                          <TableCell
                              className={'font-semibold text-card-foreground text-left'}>{info[0]}</TableCell><TableCell
                            className={'text-left text-card-foreground font-semibold'}>{_.round(info[1] * 100, 3)}%</TableCell>
                          <TableCell
                              className={'text-right text-card-foreground pr-6'}>{info[2]}</TableCell>
                        </TableRow>)
                    }
                )}

            </TableBody>

          </Table>
          <div
              className={`flex border rounded-b-md border-ring items-center justify-center text-center font-semibold`}>
            <Button onClick={() => setSortState('high')} variant={'ghost'}
                    className={`w-full pb-2 ${sortState === 'high' ? "bg-muted/40" : ""} rounded-none rounded-bl-md`}>Best<ArrowUpIcon></ArrowUpIcon></Button>
            <Button onClick={() => setSortState('low')} variant={'ghost'}
                    className={`w-full pb-2 ${sortState === 'low' ? "bg-destructive/10" : ""} rounded-none`}>Low<ArrowDownIcon></ArrowDownIcon></Button>
            <Button variant={'ghost'} className={'w-full rounded-none rounded-br-md pb-2'}>View
              All <OpenInNewWindowIcon className={'mx-1'}/></Button>
          </div>
        </div>
    )
}