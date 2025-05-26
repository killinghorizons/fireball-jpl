import { DataTableProps } from "@/types";

export default function Pagination<TData>({ table }: DataTableProps<TData>) {
  return (
    <div className="flex flex-col mt-5 md:flex-row md:items-center md:justify-end">
      <div className="flex items-center justify-end space-x-2 py-4 pt-5">
        <button
          className="btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous page
        </button>
        <div className="join">
          <button
            className={
              table.getState().pagination.pageIndex === 0
                ? "join-item btn bg-alt text-neutral-950"
                : "join-item btn"
            }
            onClick={() => table.setPageIndex(0)}
          >
            1
          </button>
          {table.getState().pagination.pageIndex > 0 &&
            table.getState().pagination.pageIndex <
              table.getPageCount() - 1 && (
              <button className="join-item btn bg-alt text-neutral-950">
                {table.getState().pagination.pageIndex + 1}
              </button>
            )}

          <button
            className={
              table.getState().pagination.pageIndex === table.getPageCount() - 1
                ? "join-item btn bg-alt text-neutral-950"
                : "join-item btn"
            }
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            {table.getPageCount()}
          </button>
        </div>
        <button
          className="btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
