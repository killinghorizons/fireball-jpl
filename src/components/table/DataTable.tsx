"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  useReactTable,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { useMemo, useState } from "react";
import SearchInput from "@/components/table/SearchInput";
import Pagination from "@/components/table/Pagination";
import ChevronUp from "@/components/icons/ChevronUp";
import ChevronDown from "@/components/icons/ChevronDown";
import SortButton from "@/components/table/SortButton";
import PageSizeSelection from "./PageSizeSelection";

export interface DataTableProps<TData, TValue> {
  columnsValues: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columnsValues,
  data,
}: DataTableProps<TData, TValue>) {
  const columns = useMemo(() => columnsValues, [columnsValues]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  //
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <section className="py-12">
      <div className="overflow-x-auto">
        <div className="md:flex md:items-center md:gap-10 mb-4 md:mb-8">
          <PageSizeSelection table={table} />
          <SearchInput table={table} />
        </div>
        <table className="table table-zebra mb-5 text-center">
          <thead className="font-bold">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    // Check if sorting is possible then add event handler
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className={
                        header.column.getCanSort() ? "cursor-pointer" : ""
                      }
                    >
                      <div className="flex items-center justify-center gap-2">
                        {header.isPlaceholder ? null : (
                          <span>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                        )}
                        {/* Visual Indicator Sorting */}
                        {header.column.getCanSort() ? <SortButton /> : null}
                        {header.column.getIsSorted() === "asc" && <ChevronUp />}
                        {header.column.getIsSorted() === "desc" && (
                          <ChevronDown />
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
    </section>
  );
}
