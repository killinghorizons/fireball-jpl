"use client";
import { DataShape } from "@/types";

import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";

export default function Test({ data }: { data: DataShape[] }) {
  const dataFiltered = data.filter((d) => (d.alt ? d.alt > 0 : null));
  const mean =
    dataFiltered.reduce((x, y) => {
      if (y.alt !== undefined) return (x = x + y.alt);
      return 0;
    }, 0) / dataFiltered.length;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tight pb-10 text-title">
        Altitude distribution
      </h2>
      <div className="h-[calc(100vh*3/4)] overflow-x-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={dataFiltered}>
            <XAxis dataKey="Altitude" />
            <YAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="alt"
              fill="#37d5be"
              name="Altitude"
              activeBar={<Rectangle fill="gold" />}
            />
            <ReferenceLine y={mean} label="Mean" stroke="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
