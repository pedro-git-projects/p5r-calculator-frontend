import React from "react";
import Stats from "../types/detailed/Stats";

interface StatsTableProps {
  stats: Stats;
}

const StatsTable: React.FC<StatsTableProps> = ({ stats }) => {
  const statEntries = Object.entries(stats);

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead className="bg-[#732424]">
          <tr>
            <th className="title p-4 shadow-lg" colSpan={statEntries.length}>
              Stats
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {statEntries.map(([stat, value]) => (
              <td key={stat} className="p-4">
                <div className="font-bold">{stat}</div>
                <div className="mt-2 pt-2">{value}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
