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

const blues = ["#1A334A", "#264F73", "#457AA6", "#5878a2", "#8AA0BDFF", "#457AA6", "#A2BBD2"];



export function StatSubSubCard({stat, data}) {
    return (

      <ResponsiveContainer width={400} height={400}>
        <ComposedChart
          layout="vertical"
          width={300}
          height={300}
          data={data}>

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey={stat} barSize={40}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={blues[index % blues.length]} />
            ))
          }
          </Bar>
          {/*<Line dataKey="uv" stroke="#ff7300" />*/}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

