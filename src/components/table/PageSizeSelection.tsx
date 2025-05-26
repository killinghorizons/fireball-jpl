import { DataTableProps } from "@/types";

export default function PageSizeSelection<TData>({
  table,
}: DataTableProps<TData>) {
  return (
    <select
      value={table.getState().pagination.pageSize}
      onChange={(e) => {
        table.setPageSize(Number(e.target.value));
      }}
      className="select"
    >
      {[10, 20, 50, 100].map((pageSize) => (
        <option key={pageSize} value={pageSize} defaultValue={10}>
          Show {pageSize}
        </option>
      ))}
    </select>
  );
}
