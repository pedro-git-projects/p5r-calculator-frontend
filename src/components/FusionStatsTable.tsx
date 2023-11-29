interface StatsTableProps {
  stats: { [key: string]: number };
  title: string;
}

const FusionStatsTable: React.FC<StatsTableProps> = ({ stats, title }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-semibold text-white text-center bg-blue-900">
        {title}
      </h2>
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Stat</th>
            <th className="py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stats).map(([stat, value]) => (
            <tr key={stat}>
              <td className="py-2 px-4 text-center">{stat}</td>
              <td className="py-2 px-4 text-center">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FusionStatsTable;
