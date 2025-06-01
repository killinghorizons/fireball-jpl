"use client";
import { DataShape } from "@/types";

import { min, max } from "simple-statistics";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function Test({ data }: { data: DataShape[] }) {
  const altitude = data
    .map((d) => d.alt)
    .filter((d) => d !== null && d !== undefined);

  const range = (start: number, stop: number, step = 1) =>
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step
    );

  const bins = range(min(altitude), max(altitude), 5);

  const occurrences = bins.map((bin, index) => ({
    range: `${bin}-${bins[index + 1] || bin + 10}`,
    count: altitude.filter(
      (num) => num >= bin && num < (bins[index + 1] || bin + 10)
    ).length,
  }));

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tight pb-10 text-title">
        Altitude distribution
      </h2>
      <div className="h-[calc(100vh*3/5)] overflow-x-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={occurrences}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Legend />
            <Bar dataKey="count" fill="#ffce54" name="Altitude distribution" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
