import ArrowUpDown from "@/components/icons/ArrowUpDown";

interface Props {
  onClick: () => void;
  label: string;
}

export default function SortButton({ onClick, label }: Props) {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      {label}
      <ArrowUpDown />
    </button>
  );
}
