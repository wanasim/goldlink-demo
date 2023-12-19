import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Pie from "./pie";
import Table from "./table";

export default function App() {
  return (
    <div className=" ">
      <Pie />
      <Table />
    </div>
  );
}
