import Stats from "./Stats";
import Resistances from "./resistances";
import Skills from "./skills";

interface Persona {
  arcana: string;
  id: number;
  inherits: string;
  item: string;
  itemr: string;
  lvl: number;
  name: string;
  rare: boolean;
  resists: Resistances;
  skills: Skills;
  special: boolean;
  stats: Stats;
  trait: string;
}

export default Persona;
