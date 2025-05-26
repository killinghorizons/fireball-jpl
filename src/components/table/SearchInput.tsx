import { DataTableProps } from "@/types";
import Lens from "@/components/icons/Lens";

export default function SearchInput<TData>({ table }: DataTableProps<TData>) {
  return (
    <div className="flex items-center py-4 mb-5 md:mb-0">
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
