import ArrowUpDown from "@/components/icons/ArrowUpDown";

interface Props {
  onClick: () => void;
  label: string;
  unit?: string;
}

export default function SortButton({ onClick, label, unit }: Props) {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      <div className="flex items-center gap-2">
        <p className="font-bold">{unit}</p>
        <span>{label}</span>
        <ArrowUpDown />
      </div>
    </button>
  );
}
