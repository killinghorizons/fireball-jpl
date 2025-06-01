// Comps
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import Hero from "@/components/Hero";
import Describe from "@/components/describe/Describe";
import Test from "@/components/charts/Test";

import getData from "@/lib/getData";
import MapDisplay from "@/components/map/MapDisplay";

export default async function Home() {
  const { data, error } = await getData();

  return (
    <div className="flex flex-col gap-12 py-12 lg:gap-24 lg:py-24">
      <Hero />
      {error && <div>Error fetching data, please refresh.</div>}
      {!error && (
        <>
          <MapDisplay data={data} />
          <div>
            <div className="py-6">
              <Describe data={data} />
            </div>
            <DataTable columnsValues={columns} data={data} />
          </div>
          <Test data={data} />
        </>
      )}
    </div>
  );
}
