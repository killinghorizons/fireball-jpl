"use client";
import { DataShape } from "@/types";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface Props {
  data: DataShape[];
}

export default function MapDisplay({ data }: Props) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <section className="z-0">
      <Map data={data} />
    </section>
  );
}
