import { Table } from "@tanstack/react-table";
import Lens from "@/components/icons/Lens";

interface Props<TData> {
  table: Table<TData>;
}

export default function SearchInput({ table }: Props) {
  return (
    <div className="flex items-center py-4">
      <label className="input">
        <Lens />
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
