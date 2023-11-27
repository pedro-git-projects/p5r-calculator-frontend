import ElementUnion from "./ElementUnion";
import TargetUnion from "./TargetUnion";

interface SkillEntry {
  cost: number;
  effect: string;
  element: ElementUnion;
  id: number;
  name: string;
  target: TargetUnion;
}

export default SkillEntry;
