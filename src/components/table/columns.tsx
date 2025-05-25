"use client";

import { ColumnDef } from "@tanstack/react-table";
import SortButton from "../SortButton";

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
          unit="(j)
          "
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
          unit="(kt)"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    accessorKey: "alt",
    header: ({ column }) => {
      return (
        <SortButton
          label="Altitude"
          unit="(km)"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    accessorKey: "vel",
    header: ({ column }) => {
      return (
        <SortButton
          label="Velocity"
          unit="(km/s)"
          onClick={() => column.toggleSorting(column.getIsSorted())}
        />
      );
    },
  },
  {
    header: "Coordinates",
    accessorKey: "coordinates",
  },
];
