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
    <div className="flex gap-4 p-4">
      <div className="basis-1/3 border shadow-lg rounded-lg  p-5">
        <Pie />
      </div>
      <div className="basis-2/3 border shadow-lg rounded-lg  p-5">
        <Table />
      </div>
    </div>
  );
}
