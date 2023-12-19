import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import Table from "./table";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Strategy 1",
    "Strategy 2",
    "Strategy 3",
    "Strategy 4",
  ],
  datasets: [
    {
      label: "Lending Allocations",
      data: [0.5, 0.125, 0.125, 0.25],
      backgroundColor: [
        "#855CF8",
        "#E289F2",
        "#7879F1",
        "#B085FF",
      ],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "CSDLFKGNFSLKGNSDFSNDFGNSDFLGNSDFNGSDNKGN",
      position: "bottom", // Position of the title
      font: {
        size: 18, // Font size of the title
      },
    },
    legend: {
      maxSize: 1000,
      position: "bottom", // This will move the legend to the bottom
      labels: {
        usePointStyle: true, // This will use points instead of boxes for legend items
        pointStyle: "circle", // Specify the point as a circle
        padding: 20, // Adjust spacing between legend items
        font: {
          size: 16, // Adjust font size as needed
        },
      },
    },
  },
};
export default function PieChart() {
  return (
    <div className="">
      <h1>
        Lending Allocations
        <p className=" float-right">$5000 USDC</p>
      </h1>
      <div className="flex justify-center pt-4">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
