"use client";
import { useState } from "react";

import DescribeHead from "@/components/describe/DescribeHead";
import DescribeBody from "./DescribeBody";
import MenuOpen from "../icons/MenuOpen";
import MenuClose from "../icons/MenuClose";
import { DataShape } from "@/types";

interface Props {
  data: DataShape[];
}

export default function Describe({ data }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <section className="overflow-x-auto">
      <div className="btn" onClick={handleClick}>
        <button className="cursor-pointer">
          {!menuOpen ? <MenuOpen /> : <MenuClose />}
        </button>
        <p className="cursor-pointer">Data summary</p>
      </div>
      {menuOpen && (
        <table className="table table-zebra mb-5 text-center">
          <DescribeHead />
          <DescribeBody data={data} />
        </table>
      )}
    </section>
  );
}
