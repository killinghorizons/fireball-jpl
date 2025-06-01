// Comps
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import Hero from "@/components/Hero";
import Describe from "@/components/describe/Describe";
// import Test from "@/components/charts/Test";

import getData from "@/lib/getData";

export default async function Home() {
  const { data, error } = await getData();

  return (
    <>
      <Hero title="Fireballs Data" />
      {error && <div>Error fetching data, please refresh.</div>}
      {!error && (
        <>
          <Describe data={data} />
          <DataTable columnsValues={columns} data={data} />
          {/* <Test data={data} /> */}
        </>
      )}
    </>
  );
}
