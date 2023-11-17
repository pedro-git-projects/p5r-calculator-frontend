import React from "react";
import Stats from "../types/detailed/Stats";

interface StatsTableProps {
  stats: Stats;
}

const StatsTable: React.FC<StatsTableProps> = ({ stats }) => {
  const statEntries = Object.entries(stats);

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="title p-4" colSpan={statEntries.length}>
              Stats
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {statEntries.map(([stat, value]) => (
              <td key={stat} className="p-4 border">
                <div className="font-bold">{stat}</div>
                <div className="border-t mt-2 pt-2">{value}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
