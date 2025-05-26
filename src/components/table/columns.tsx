"use client";

import { expo } from "@/lib/format";
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
    header: "Energy (j)",
    cell: ({ row }) => <>{expo(row.getValue("energy"))}</>,
  },
  {
    accessorKey: "impactE",
    header: "Impact Energy (kt)",
  },
  {
    accessorKey: "alt",
    header: "Altitude (km)",
  },
  {
    accessorKey: "vel",
    header: "Velocity (km/s)",
  },
  {
    header: "Coordinates",
    accessorKey: "coordinates",
    enableSorting: false,
  },
];
