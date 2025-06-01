import { DataShape } from "@/types";

interface Props {
  popData: DataShape;
}

export default function PopupStyle({ popData }: Props) {
  const { date, impactE, energy, alt, vel, lat, lon } = popData;

  return (
    <article>
      <div>
        <h2>Date: {date}</h2>
        <p>Impact Energy: {impactE} (kt)</p>
        <p>Energy: {energy} (gj)</p>
        {alt && <p>Altitude: {alt} (km)</p>}
        {vel && <p>Velocity: {vel} (km/s)</p>}
        {lat && lon && (
          <p>
            Coordinates [ {lat},{lon} ]
          </p>
        )}
      </div>
    </article>
  );
}
