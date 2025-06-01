import {
  standardDeviation,
  variance,
  mean,
  min,
  max,
  quantile,
} from "simple-statistics";
import { DataShape } from "@/types";

interface Props {
  data: DataShape[];
}

export default function DescribeBody({ data }: Props) {
  const energy = data
    .map((row) => row.energy)
    .filter((row) => row !== null && row !== undefined);
  const impactEnergy = data
    .map((row) => row.impactE)
    .filter((row) => row !== null && row !== undefined);
  const altitude = data
    .map((row) => row.alt)
    .filter((row) => row !== null && row !== undefined);
  const velocity = data
    .map((row) => row.vel)
    .filter((row) => row !== null && row !== undefined);

  const columns = [energy, impactEnergy, altitude, velocity];

  const rows = [
    {
      name: "Count",
      values: columns.map((col) => `${col.length} of ${data.length}`),
    },
    {
      name: "Mean",
      values: columns.map((col) => mean(col).toFixed(2)),
    },
    {
      name: "Std",
      values: columns.map((col) => standardDeviation(col).toFixed(2)),
    },
    {
      name: "Var",
      values: columns.map((col) => variance(col).toFixed(2)),
    },
    {
      name: "Min",
      values: columns.map((col) => min(col).toFixed(2)),
    },
    {
      name: "25%",
      values: columns.map((col) => quantile(col, 0.25).toFixed(2)),
    },
    {
      name: "50%",
      values: columns.map((col) => quantile(col, 0.5).toFixed(2)),
    },
    {
      name: "75%",
      values: columns.map((col) => quantile(col, 0.75).toFixed(2)),
    },
    {
      name: "Max",
      values: columns.map((col) => max(col).toFixed(2)),
    },
  ];

  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          {row.values.map((val, index) => (
            <td key={index}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
