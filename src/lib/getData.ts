import { DataShape } from "@/components/table/columns";

export default async function getData(): Promise<{
  data: DataShape[] | [];
  error: string | null;
}> {
  const URL = "https://ssd-api.jpl.nasa.gov/fireball.api";
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("Failed to fetch data");
    const { data } = await res.json();

    const dataRemap = data.map((element: string[]) => ({
      date: element[0],
      energy: Number(element[1]),
      impactE: Number(element[2]),
      lat: element[3],
      // latDir: element[4],
      long: element[5],
      // longDir: element[6],
      alt: Number(element[7]),
      vel: Number(element[8]) || null,
    }));
    return {
      data: dataRemap,
      error: null,
    };
  } catch (error: Error) {
    console.error(error.message);
    return {
      data: [],
      error: error,
    };
  }
}
