"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../SortButton";

export type DataShape = {
  date?: string;
  energy?: string;
  impactE?: string;
  lat?: string;
  latDir?: string;
  long?: string;
  longDir?: string;
  alt?: string;
  vel?: string;
};

export const columns: ColumnDef<DataShape>[] | [] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <SortButton
          label="Date"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    accessorKey: "energy",
    header: ({ column }) => {
      return (
        <SortButton
          label="Energy"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    accessorKey: "impactE",
    header: ({ column }) => {
      return (
        <SortButton
          label="Impact Energy"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    accessorKey: "lat",
    header: "Lat",
  },
  {
    accessorKey: "latDir",
    header: "Lat Dir",
  },
  {
    accessorKey: "long",
    header: "Long",
  },
  {
    accessorKey: "longDir",
    header: "Long Dir",
  },
  {
    accessorKey: "alt",
    header: "Altitude",
  },
  {
    accessorKey: "vel",
    header: "Velocity",
  },
];
