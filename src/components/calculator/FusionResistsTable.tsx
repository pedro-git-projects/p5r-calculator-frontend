import React from "react";
import ResultResists from "../../types/fusion/ResultResists";

interface ResistsTableProps {
  resists: ResultResists;
  title: string;
}

const FusionResistsTable: React.FC<ResistsTableProps> = ({
  resists,
  title,
}) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-semibold text-white text-center bg-blue-900">
        {title}
      </h2>
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead>
          <tr>
            {Object.keys(resists).map(resist => (
              <th key={resist} className="py-2 px-4">
                {resist}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(resists).map((resistance, index) => (
              <td key={index} className="py-2 px-4 text-center">
                {resistance}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FusionResistsTable;
