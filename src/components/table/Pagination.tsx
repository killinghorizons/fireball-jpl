export default function Pagination({ table }) {
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
        <div>
          <div className="join">
            <button className="join-item btn">
              {table.getState().pagination.pageIndex + 1}
            </button>
            <button className="join-item btn btn-disabled">...</button>
            <button className="join-item btn"></button>
            <button className="join-item btn btn-disabled">...</button>
            <button className="join-item btn">{table.getPageCount()}</button>
          </div>
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
