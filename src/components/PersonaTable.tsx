import React from "react";

interface PersonaProps {
  persona: Persona;
}

const PersonaTable: React.FC<PersonaProps> = ({ persona }) => {
  return (
    <div className="overflow-x-auto">
      <table className="aspect-ratio aspect-ratio-auto w-screen table-auto">
        <thead>
          <tr>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Name</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Inherits</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Item</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Itemr</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Level</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">
              Resistances
            </th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Skills</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Stats</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Trait</th>
            <th className="px-2 py-1 text-sm bg-gray-200 border">Arcana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1 border text-sm">{persona.name}</td>
            <td className="px-2 py-1 border text-sm">{persona.inherits}</td>
            <td className="px-2 py-1 border text-sm">{persona.item}</td>
            <td className="px-2 py-1 border text-sm">{persona.itemr}</td>
            <td className="px-2 py-1 border text-sm">{persona.lvl}</td>
            <td className="px-2 py-1 border text-sm">
              {formatResistances(persona.resists)}
            </td>
            <td className="px-2 py-1 border text-sm">
              {formatSkills(persona.skills)}
            </td>
            <td className="px-2 py-1 border text-sm">
              {formatStats(persona.stats)}
            </td>
            <td className="px-2 py-1 border text-sm">{persona.trait}</td>
            <td className="px-2 py-1 border text-sm">{persona.arcana}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const formatResistances = (resists: {
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
}) => {
  const resistanceLabels = {
    phys: "Phys",
    gun: "Gun",
    fire: "Fire",
    ice: "Ice",
    elec: "Elec",
    wind: "Wind",
    pys: "Pys",
    nuke: "Nuke",
    bless: "Bless",
    curse: "Curse",
  };

  return Object.keys(resists).map(key => (
    <td key={key} className="px-2 py-1 border">
      <strong>{resistanceLabels[key]}:</strong> {resists[key]}
    </td>
  ));
};

const formatSkills = (skills: { [key: string]: number }) => {
  return Object.keys(skills).map(key => (
    <td key={key} className="px-2 py-1 border">
      <strong>{key}:</strong> {skills[key]}
    </td>
  ));
};

const formatStats = (stats: {
  st: number;
  ma: number;
  en: number;
  ag: number;
  lu: number;
}) => {
  const statLabels = {
    st: "Strength",
    ma: "Magic",
    en: "Endurance",
    ag: "Agility",
    lu: "Luck",
  };

  return Object.keys(stats).map(key => (
    <td key={key} className="px-2 py-1 border">
      <strong>{statLabels[key]}:</strong> {stats[key]}
    </td>
  ));
};

export default PersonaTable;
