"use client";
import { DataShape } from "@/types";

import { expo } from "@/lib/format";
import { ColumnDef } from "@tanstack/react-table";

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
