const Inherits = [
  "curse",
  "elec",
  "ice",
  "almighty",
  "nuke",
  "bless",
  "wind",
  "ailment",
  "phys",
  "fire",
  "psy",
  "healing",
  "none",
] as const;

type InheritanceTuple = typeof Inherits;
export default InheritanceTuple;
