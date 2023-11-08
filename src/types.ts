interface Persona {
  name: string;
  inherits: string;
  item: string;
  itemr: string;
  lvl: number;
  resists: {
    phys: string;
    gun: string;
    fire: string;
    ice: string;
    elec: string;
    wind: string;
    pys: string;
    nuke: string;
    bless: string;
    curse: string;
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
  arcana: string;
}
