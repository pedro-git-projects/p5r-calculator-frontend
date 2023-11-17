import ArcanaTuple from "./ArcanaTuple";
import ResistsTuple from "./ResistsTuple";
import InheritanceTuple from "./InheritanceTuple";

interface Persona {
  name: string;
  inherits: InheritanceTuple;
  item: string;
  itemr: string;
  lvl: number;
  id: number;
  resists: {
    phys: ResistsTuple;
    gun: ResistsTuple;
    fire: ResistsTuple;
    ice: ResistsTuple;
    elec: ResistsTuple;
    wind: ResistsTuple;
    pys: ResistsTuple;
    nuke: ResistsTuple;
    bless: ResistsTuple;
    curse: ResistsTuple;
  };
  skills: {
    [key: string]: number;
  };
  stats: {
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
  };
  trait: string;
  arcana: ArcanaTuple;
}

export default Persona;
