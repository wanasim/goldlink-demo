export default function Table() {
  const data = [
    {
      strategy: "Strategy 1",
      tvl: 100000,
      volatility: "Low",
      collateral: 1000,
      pnl: 100,
    },
    {
      strategy: "Strategy 2",
      tvl: 100000,
      volatility: "Medium",
      collateral: 1000,
      pnl: -100,
    },
    {
      strategy: "Strategy 3",
      tvl: 100000,
      volatility: "Medium",
      collateral: 1000,
      pnl: 100,
    },
    {
      strategy: "Strategy 4",
      tvl: 100000,
      volatility: "High",
      collateral: 1000,
      pnl: 100,
    },
  ];

  const getVolatilityColor = (text) => {
    console.log("invoked", text);
    return text === "Low"
      ? "bg-table-purple-low"
      : text === "Medium"
      ? "bg-table-purple-med"
      : "bg-table-purple-high";
  };

  const getPnlColor = (number) => {
    return number > 0 ? "text-pnl-green" : "text-pnl-red";
  };
  return (
    <>
      <h1 className="mb-4 text-2xl">
        Strategy Performance
      </h1>
      <div className="bg-white shadow-md border rounded-lg py-4">
        {/* Header Row */}
        <div className="px-4 grid grid-cols-5 py-4">
          <div
            role="columnheader"
            className="font-semibold text-gray-400 "
          >
            Strategy
          </div>
          <div
            role="columnheader"
            className="font-semibold text-gray-400"
          >
            TVL
          </div>
          <div
            role="columnheader"
            className="font-semibold text-gray-400"
          >
            Volatility
          </div>
          <div
            role="columnheader"
            className="font-semibold text-gray-400"
          >
            Collateral
          </div>
          <div
            role="columnheader"
            className="font-semibold text-gray-400"
          >
            PNL
          </div>
        </div>

        {/* Body */}
        {data.map((str) => {
          return (
            <div className="px-4 grid grid-cols-5 border-t-2 py-6">
              <div className=" border-t-5">
                {str.strategy}
              </div>
              <div className="">
                ${str.tvl.toLocaleString("en-US")}
              </div>
              <div
                className={`text-white ${getVolatilityColor(
                  str.volatility
                )} rounded-full px-3 py-1 w-min`}
              >
                {str.volatility}
              </div>
              <div className="">{str.collateral}</div>
              <div className={`${getPnlColor(str.pnl)}`}>
                ${str.pnl.toLocaleString("en-US")}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
