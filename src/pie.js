import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import Table from "./table";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Strategy 1",
    "Strategy 2",
    "Strategy 3",
    "Strategy 4",
  ],
  datasets: [
    {
      label: "Lending Allocations",
      data: [0.5, 0.25, 0.125, 0.125],
      backgroundColor: [
        "#855CF8",
        "#E289F2",
        "#7879F1",
        "#B085FF",
      ],
    },
  ],
};
export default function Chart() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    const pieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);
  // return <Pie data={data} />;
  return <div id="myChart"></div>;
}
