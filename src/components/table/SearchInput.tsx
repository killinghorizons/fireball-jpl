import { Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
}

export default function SearchInput({ table }: Props) {
  return (
    <div className="flex items-center py-4">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Filter date..."
          value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="grow"
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
    </div>
  );
}
