import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-title">Fireballs Data</h1>
          <p className="py-6">
            Fireballs and bolides are astronomical terms for exceptionally
            bright meteors that are spectacular enough to to be seen over a very
            wide area.
          </p>
          <p className="py-3">
            This site display the data collected by the US Government.
          </p>
          <Link
            href="https://ssd-api.jpl.nasa.gov/doc/fireball.html"
            target="_blank"
            className="link"
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
}
