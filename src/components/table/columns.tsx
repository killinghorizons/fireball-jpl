"use client";
import { DataShape } from "@/types";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<DataShape>[] | [] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "energy",
    header: "Energy (gj)",
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
    header: "Coordinates (lat,lon)",
    accessorKey: "coordinates",
    enableSorting: false,
  },
];
