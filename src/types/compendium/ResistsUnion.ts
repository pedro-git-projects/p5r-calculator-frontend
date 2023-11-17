type ResistsUnion =
  | "-" // nothing
  | "d" // absorb
  | "s" // resists
  | "r" // repel
  | "w" // weak
  | "n"; // null

export default ResistsUnion;
