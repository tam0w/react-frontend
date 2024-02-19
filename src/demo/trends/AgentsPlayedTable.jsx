import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArrowDownIcon, ArrowUpIcon, OpenInNewWindowIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import _ from 'lodash';

const agent_data = [['Jett', 0.747, 67], ['Raze', 0.651, 52], ['Sova', 0.346, 45], ['Breach', 0.347, 42],
    ['Omen', 0.697, 41], ['Iso', 0.2377, 67], ['Deadlock', 0.3455, 52], ['Skye', 0.376, 45], ['Yoru', 0.447, 42],
    ['Reyna', 0.757, 62], ['Gekko', 0.651, 12], ['Sova', 0.346, 45], ['Breach', 0.347, 42],
    ['Killjoy', 0.697, 41], ['Cypher', 0.2377, 67], ['Sage', 0.345, 52], ['Brimstone', 0.376, 45],
    ["Astra", 0.697, 41], ['Viper', 0.2377, 67], ['Fade', 0.345, 52], ['Phoenix', 0.376, 45], ['Harbour', 0.447, 42]]

export function AgentsPlayedTable() {
    const [sortState, setSortState] = useState('high');
    const [performanceData, setPerformanceData] = useState(sortData(agent_data, sortState));

    function sortData(data, sortState) {
        if (sortState === 'high') {
            return data.sort((a, b) => b[1] - a[1]); // For descending order
        }
        else {
            return data.sort((a, b) => a[1] - b[1]); // For ascending order
        }
    }

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