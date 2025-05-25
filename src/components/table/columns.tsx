"use client";

import { ColumnDef } from "@tanstack/react-table";

export type DataShape = {
  date?: string;
  energy?: number;
  impactE?: number;
  lat?: string;
  long?: string;
  alt?: number;
  vel?: number;
};

export const columns: ColumnDef<DataShape>[] | [] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "energy",
    header: "Energy",
  },
  {
    accessorKey: "impactE",
    header: "Impact Energy",
  },
  {
    accessorKey: "alt",
    header: "Altitude",
  },
  {
    accessorKey: "vel",
    header: "Velocity",
  },
  {
    header: "Coordinates",
    accessorKey: "coordinates",
    enableSorting: false,
  },
];
