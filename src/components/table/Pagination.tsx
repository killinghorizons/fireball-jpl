export default function Pagination({ table }) {
  return (
    <div className="flex flex-col mt-5 md:flex-row md:items-center md:justify-between">
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        className="select"
      >
        {[10, 20, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize} defaultValue={10}>
            Show {pageSize}
          </option>
        ))}
      </select>
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
            <button className="join-item btn">2</button>
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
