import Hero from "@/components/Hero";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

import getData from "@/lib/getData";

export default async function Home() {
  const { data, error } = await getData();

  return (
    <>
      <Hero title="Fireballs Data" />
      {!error && <DataTable columnsValues={columns} data={data} />}
      {error && <div>Error fetching data, please refresh.</div>}
    </>
  );
}
