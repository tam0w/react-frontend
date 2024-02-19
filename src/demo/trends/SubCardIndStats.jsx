import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const playerStats = [
  { stat: 'RATING', value: 1.7, average: 1.5 },
  // ... other stats
];

export function SubCardIndStats({name}) {
  return (
      <div className="p-4 text-card-foreground">
      <h1 className="font normal text-card">{name}</h1>
      <div className="flex flex-col gap-4">

        <div className="flex flex-row gap-4">


        </div>

        <div className="flex flex-row gap-4">


        </div>
      </div>
    </div>
  )
}
