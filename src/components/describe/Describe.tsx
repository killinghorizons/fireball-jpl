"use client";
import { useState } from "react";

import DescribeHead from "@/components/describe/DescribeHead";
import { DataShape } from "@/types";
import DescribeBody from "./DescribeBody";
import MenuOpen from "../icons/MenuOpen";
import MenuClose from "../icons/MenuClose";

interface Props {
  data: DataShape[];
}

export default function Describe({ data }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="overflow-x-auto">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleClick}
      >
        <button>{!menuOpen ? <MenuOpen /> : <MenuClose />}</button>
        <p>Show data statistics</p>
      </div>
      {menuOpen && (
        <table className="table table-zebra mb-5 text-center">
          <DescribeHead />
          <DescribeBody data={data} />
        </table>
      )}
    </div>
  );
}

{
  /* <td>mean</td>
<td>std</td>
<td>var</td>
<td>min</td>
<td>25%</td>
<td>50%</td>
<td>75%</td>
<td>max</td> */
}
