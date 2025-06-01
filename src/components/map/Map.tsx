"use client";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { DataShape } from "@/types";
import PopupStyle from "./PopupStyle";

interface Props {
  data: DataShape[];
}

export default function Map({ data }: Props) {
  const redOptions = { color: "red" };
  const blueOptions = { color: "blue" };

  const dataClean = data.filter(
    (d) =>
      d.lat !== null &&
      d.lon !== null &&
      d.lat !== undefined &&
      d.lon !== undefined
  );

  function radiusOptions(energy: number) {
    return Math.log10(energy) * 10;
  }

  return (
    <MapContainer
      center={[20, 0]}
      zoom={3}
      scrollWheelZoom={true}
      className="h-[600px]"
      maxZoom={6}
      minZoom={3}
      bounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
        noWrap={true}
      />
      {dataClean.map((d, index) => (
        <CircleMarker
          center={[d.lat, d.lon]}
          pathOptions={radiusOptions(d.impactE) > 2 ? redOptions : blueOptions}
          radius={radiusOptions(d.impactE)}
          key={index}
          opacity={0.8}
        >
          <Popup closeOnClick>
            <PopupStyle popData={d} />
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
