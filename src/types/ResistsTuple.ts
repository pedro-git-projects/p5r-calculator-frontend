const Resists = [
  "-", // nothing
  "d", // absorb
  "s", // resists
  "r", // repel
  "w", // weak
  "n", // null
] as const;

type ResistsTuple = typeof Resists;
export default ResistsTuple;
