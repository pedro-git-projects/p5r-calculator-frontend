import ResultResists from "./ResultResists";
import ResultSkills from "./ResultSkills";
import ResultStats from "./ResultStats";

interface FusionResult {
  arcana: string;
  id: number;
  inherits: string;
  item: string;
  itemr: string;
  lvl: number;
  name: string;
  rare: boolean;
  resists: ResultResists;
  skills: ResultSkills;
  special: boolean;
  stats: ResultStats;
  trait: string;
}

export default FusionResult;
