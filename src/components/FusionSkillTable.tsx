interface SkillsTableProps {
  skills: { [key: string]: number };
  title: string;
}

const FusionSkillsTable: React.FC<SkillsTableProps> = ({ skills, title }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-semibold text-white text-center bg-blue-900">
        {title}
      </h2>
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Skill</th>
            <th className="py-2 px-4">Level</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(skills).map(([skill, level]) => (
            <tr key={skill}>
              <td className="py-2 px-4 text-center">{skill}</td>
              <td className="py-2 px-4 text-center">{level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FusionSkillsTable;
