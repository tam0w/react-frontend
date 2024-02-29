import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, Cell,
} from 'recharts';
import {CardTitle} from "@/components/ui/card.jsx";

const blues = ["#092a48", "#1e3a52", "#274767", "#2a4c72", "#496e93", "#5c84a4", "#7dabce", "#a0c4ec"];



export function StatSubSubCard({stat, data}) {
    return (

      <ResponsiveContainer width={400} height={400} >
        <ComposedChart
          layout="vertical"
          width={300}
          height={300}
          data={data}>
          <XAxis type="number" stroke={'#ffffff'}/>
          <YAxis dataKey="name" type="category" stroke={'#ffffff'} />
          <Tooltip />
          <Bar dataKey={stat} barSize={50} >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={blues[index % blues.length]}  />
            ))
          }
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

