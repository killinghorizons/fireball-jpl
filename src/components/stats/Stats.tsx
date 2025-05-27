interface LayoutProps {
  children: React.ReactNode;
}

interface StatProps {
  title: string;
  value: number | string;
}

export function StatLayout({ children }: LayoutProps) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow gap-4">
      {children}
    </div>
  );
}

export function Stat({ title, value }: StatProps) {
  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
