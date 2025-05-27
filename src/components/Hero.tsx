"use client";
import { mean, median, mode, variance } from "simple-statistics";
import { DataShape } from "@/types";
import { StatLayout, Stat } from "@/components/stats/Stats";
import { ChangeEvent, useState } from "react";

interface Props {
  title: string;
  data: DataShape[];
}

export default function Hero({ title, data }: Props) {
  const [filter, setFilter] = useState("energy");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const filters = ["energy", "impactE", "alt", "vel"];
    if (filters.includes(filter)) {
      setFilter(e.target.value);
    }
  };

  const filteredValues = data
    .map((obj) => obj[filter])
    .filter((value) => value != null);

  return (
    <div className="py-12">
      <h1 className="text-5xl font-bold tracking-tight text-center text-title pb-10">
        {title}
      </h1>
      <fieldset className="fieldset mb-10">
        <legend className="fieldset-legend">Choose Stats</legend>
        <select
          defaultValue="Pick a browser"
          className="select"
          onChange={handleChange}
        >
          <option value="energy">Energy</option>
          <option value="impactE">Impact Energy</option>
          <option value="alt">Altitude</option>
          <option value="vel">Velocity</option>
        </select>
      </fieldset>
      <StatLayout>
        <Stat title="Mean" value={mean(filteredValues).toFixed(2)} />
        <Stat title="Median" value={median(filteredValues).toFixed(2)} />
        <Stat title="Mode" value={mode(filteredValues).toFixed(2)} />
        <Stat title="Variance" value={variance(filteredValues).toFixed(2)} />
      </StatLayout>
    </div>
  );
}
