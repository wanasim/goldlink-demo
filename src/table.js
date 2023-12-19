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
      volatility: "Low",
      collateral: 1000,
      pnl: 100,
    },
    {
      strategy: "Strategy 3",
      tvl: 100000,
      volatility: "Low",
      collateral: 1000,
      pnl: 100,
    },
    {
      strategy: "Strategy 4",
      tvl: 100000,
      volatility: "Low",
      collateral: 1000,
      pnl: 100,
    },
  ];
  return (
    <div className="flex flex-row w-full">
      {/* <h1 className="flex flex-row w-full">
        Strategy Performance
      </h1> */}
      <table className="ml-2 table-auto w-2/3 border-black rounded-sm border-solid">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>TVL</th>
            <th>Volatility</th>
            <th>Collateral</th>
            <th>PNL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((str, index) => (
            <tr>
              <td className=" text-center">
                {str.strategy}{" "}
              </td>
              <td className=" text-center">{str.pnl}</td>
              <td className=" text-center">
                {str.volatility}{" "}
              </td>
              <td className=" text-center">
                {str.collateral}
              </td>
              <td className=" text-center">{str.pnl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
