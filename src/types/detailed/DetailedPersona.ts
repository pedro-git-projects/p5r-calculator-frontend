import DetailedSkill from "./DetailedSkill";
import Resists from "./Resists";
import Skills from "./Skills";
import Stats from "./Stats";

interface DetailedPersona {
  arcana: string;
  detailed_skills: DetailedSkill[];
  id: number;
  inherits: string;
  item: string;
  itemr: string;
  lvl: number;
  name: string;
  resists: Resists;
  skills: Skills;
  stats: Stats;
  trait: string;
}

export default DetailedPersona;
