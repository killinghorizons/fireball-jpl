import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

import getData from "@/lib/getData";

export default async function Home() {
  const { data, error } = await getData();
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-10">
        Fireball
      </h1>
      {!error && <DataTable columnsValues={columns} data={data} />}
      {error && <div>Error fetching data, please refresh.</div>}
    </div>
  );
}
