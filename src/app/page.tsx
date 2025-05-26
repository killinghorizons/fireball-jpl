// Comps
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import Test from "@/components/charts/Test";
import Hero from "@/components/Hero";

import getData from "@/lib/getData";

export default async function Home() {
  const { data, error } = await getData();

  return (
    <>
      <Hero title="Fireballs Data" />
      {error && <div>Error fetching data, please refresh.</div>}
      {!error && (
        <>
          <DataTable columnsValues={columns} data={data} />
          <Test data={data} />
        </>
      )}
    </>
  );
}
