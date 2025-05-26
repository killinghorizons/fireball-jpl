import { Table } from "@tanstack/react-table";

export interface DataTableProps<TData> {
  table: Table<TData>;
}

export type DataShape = {
  date?: string;
  energy?: number;
  impactE?: number;
  lat?: string;
  long?: string;
  alt?: number;
  vel?: number;
};
