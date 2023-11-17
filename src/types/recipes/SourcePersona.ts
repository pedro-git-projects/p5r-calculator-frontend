import Persona from "./Persona";

interface SourcePersona extends Persona {
  sources: Persona[];
}

export default SourcePersona;
