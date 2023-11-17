import ResultPersona from "./ResultPersona";
import SourcePersona from "./SourcePersona";

interface Recipe {
  cost: number;
  is_all_rare: boolean;
  result: ResultPersona;
  sources?: SourcePersona[];
}

export default Recipe;
