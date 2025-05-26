interface Props {
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <div className="text-5xl font-bold tracking-tight text-center py-12 text-title">
      <h1>{title}</h1>
    </div>
  );
}
