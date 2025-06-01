import { Table } from "@tanstack/react-table";

export interface DataTableProps<TData> {
  table: Table<TData>;
}

export type DataShape = {
  date: string;
  energy: number;
  impactE: number;
  lat: number;
  lon: number;
  alt?: number;
  vel?: number;
  coordinates?: string;
};
