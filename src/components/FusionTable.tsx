interface FusionTableProps {
  fusionChart: {
    arcanas: string[];
    table: string[][];
  };
}

const FusionTable: React.FC<FusionTableProps> = ({ fusionChart }) => {
  const { arcanas, table } = fusionChart;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-4 px-8 text-left bg-gray-200 border"></th>
            {arcanas.map((arcana, index) => (
              <th
                key={index}
                className="py-4 px-8 text-left bg-gray-200 border"
              >
                {arcana}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-4 px-8 border">{arcanas[rowIndex]}</td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-4 px-8 border">
                  {cell === "-" ? (
                    "-"
                  ) : (
                    <span className="font-bold">{cell}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FusionTable;
