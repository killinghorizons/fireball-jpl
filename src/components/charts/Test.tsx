"use client";
import { DataShape } from "@/components/table/columns";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Test({ data }: { data: DataShape[] }) {
  const dataFiltered = data.filter((d) => (d.alt ? d.alt > 0 : null));
  const mean =
    dataFiltered.reduce((x, y) => {
      return (x = x + y.alt);
    }, 0) / dataFiltered.length;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tight pb-5">Rechart</h2>
      <div className="h-[calc(100vh*3/4)] overflow-x-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataFiltered}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="Altitude" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="alt"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <ReferenceLine y={mean} label="Mean" stroke="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
