interface Props {
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-bold tracking-tight text-center text-title pb-10">
        {title}
      </h1>
    </div>
  );
}
