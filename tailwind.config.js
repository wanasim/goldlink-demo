/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "chart-purple-1": "#855CF8",
        "chart-purple-2": "#E289F2",
        "chart-purple-3": "#7879F1",
        "chart-purple-4": "#B085FF",
        "table-purple-low": "#7879F1",
        "table-purple-med": "#9B51E0",
        "table-purple-high": "#6148C2",
        "pnl-green": "#3CC13B",
        "pnl-red": "#F03738",
      },
    },
  },
  plugins: [],
};
