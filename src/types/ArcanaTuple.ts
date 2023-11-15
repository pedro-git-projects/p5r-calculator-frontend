const Arcanas = [
  "Fool",
  "Magician",
  "Priestess",
  "Empress",
  "Emperor",
  "Hierophant",
  "Lovers",
  "Chariot",
  "Justice",
  "Hermit",
  "Fortune",
  "Strength",
  "Hanged",
  "Death",
  "Temperance",
  "Devil",
  "Tower",
  "Star",
  "Moon",
  "Sun",
  "Judgement",
  "World",
  "Councillor",
  "Faith",
] as const;

type ArcanaTuple = typeof Arcanas;
export default ArcanaTuple;
