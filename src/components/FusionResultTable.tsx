import React from "react";
import FusionResult from "../types/fusion/FusionResult";
import FusionResistsTable from "./FusionResistsTable";
import FusionSkillsTable from "./FusionSkillTable";
import FusionStatsTable from "./FusionStatsTable";

interface FusionResultTableProps {
  fusionResult: FusionResult;
}

const FusionResultTable: React.FC<FusionResultTableProps> = ({
  fusionResult,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-white text-center">
        Fusion Result - {fusionResult.name}
      </h2>
      <FusionResistsTable resists={fusionResult.resists} title="Resists" />
      <FusionSkillsTable skills={fusionResult.skills} title="Skills" />
      <FusionStatsTable stats={fusionResult.stats as any} title="Stats" />
    </div>
  );
};

export default FusionResultTable;
