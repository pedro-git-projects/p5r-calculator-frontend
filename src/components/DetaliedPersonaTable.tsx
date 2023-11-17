import DetailedPersona from "../types/detailed/DetailedPersona";
import DetailedSkillstable from "./DetailedSkillsTable";
import ResistsTable from "./ResistsTable";
import StatsTable from "./StatsTable";

interface DetailedPersonaTableProps {
  persona: DetailedPersona;
}

const DetailedPersonaTable: React.FC<DetailedPersonaTableProps> = persona => {
  return (
    <>
      <DetailedSkillstable skills={persona.persona.detailed_skills} />
      <StatsTable stats={persona.persona.stats} />
      <ResistsTable resists={persona.persona.resists} />
    </>
  );
};

export default DetailedPersonaTable;
