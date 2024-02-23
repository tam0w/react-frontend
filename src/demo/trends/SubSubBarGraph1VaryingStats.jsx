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
    Cell,
  ResponsiveContainer,
} from 'recharts';
import {CardTitle} from "@/components/ui/card.jsx";
import chroma from 'chroma-js';

const numColors = 11;
const minSaturation = 0.3;
const maxSaturation = 0.7;
const minBrightness = 0.5;
const maxBrightness = 0.9;

const blueColors = [
  '#3d688f',
  '#4b7aa6',
  '#5878a2',
  '#65759e',
  '#726da2',
  '#7f6da2',
  '#8c6da2',
  '#996da2',
  '#a66da2',
  '#b36da2',
  '#c06da2'
]

export function SubSubBarGraph1VaryingStats({data}) {

const excludedProperties = ['name', 'ADR', 'FKdiff', 'Kdiff', 'Clutches'];
const dataArray = Object.entries(data)
  .filter(([name]) => !excludedProperties.includes(name))
  .map(([name, value]) => ({ name, value }));

  return (
      <ComposedChart
        layout="vertical"
        width={400}
        height={400}
        data={dataArray}>

        <XAxis tickLine={false} stroke={'#ffffff'} type="number" />
        <YAxis dataKey="name" type="category" stroke={'#ffffff'} />
        <Tooltip />
        <Bar dataKey={'value'} barSize={40} >
          {
            dataArray.map((entry, index) => (
              <Cell key={`cell-${index}`}  fill={blueColors[index % blueColors.length]} />
            ))
          }
        </Bar>
      </ComposedChart>
  );
}