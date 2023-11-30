import InheritanceUnion from "../../types/compendium/InheritanceUnion";
import ArcanaUnion from "../../types/compendium/ArcanaUnion";
import ResistsUnion from "../../types/compendium/ResistsUnion";
import Resists from "../../types/detailed/Resists";
import axios from "axios";
import { useAuth } from "../../state/AuthProvider";
import { useState } from "react";
import SuccessModal from "../utils/SuccessModal";
import ErrorModal from "../utils/ErrorModal";

interface SkillEntry {
  name: string;
  cost: number;
}

interface Stats {
  st: number;
  ma: number;
  en: number;
  ag: number;
  lu: number;
}

const PutPersonaForm: React.FC = () => {
  const { accessToken } = useAuth();
  const [personaName, setPersonaName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inherits, setInherits] = useState<InheritanceUnion>("none");
  const [item, setItem] = useState("");
  const [itemr, setItemr] = useState("");
  const [lvl, setLvl] = useState<number>(0);
  const [trait, setTrait] = useState("");
  const [arcana, setArcana] = useState<ArcanaUnion>("Sun");
  const [rare, setRare] = useState(false);
  const [special, setSpecial] = useState(false);
  const [skills, setSkills] = useState<Array<SkillEntry>>([
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
    { name: "", cost: 0 },
  ]);

  const [stats, setStats] = useState<Stats>({
    st: 0,
    ma: 0,
    en: 0,
    ag: 0,
    lu: 0,
  });

  const [resists, setResists] = useState<Resists>({
    phys: "-",
    gun: "-",
    fire: "-",
    ice: "-",
    elec: "-",
    wind: "-",
    pys: "-",
    nuke: "-",
    bless: "-",
    curse: "-",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleChoosePersona = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/personas/exact/${personaName}`,
      );
      const personaData = response.data;
      setName(personaData.name);
      setInherits(personaData.inherits);
      setItem(personaData.item);
      setItemr(personaData.itemr);
      setLvl(personaData.lvl);
      setTrait(personaData.trait);
      setArcana(personaData.arcana);
      setRare(personaData.rare);
      setSpecial(personaData.special);
      setSkills(
        // @ts-ignore
        Object.entries(personaData.skills).map(([name, cost]) => ({
          name,
          cost,
        })),
      );
      setStats(personaData.stats);
      setResists(personaData.resists);
    } catch (error: any) {
      console.error("Error fetching persona data:", error);
      setErrorMessage(
        error.response?.data?.message || "Error fetching persona data.",
      );
      setIsErrorModalOpen(true);
    }
  };

  const handleSkillChange = (
    index: number,
    skillName: string,
    skillCost: number,
  ) => {
    const newSkills = [...skills];
    newSkills[index] = { name: skillName, cost: skillCost };
    setSkills(newSkills);
  };

  const handleStatChange = (statName: keyof Stats, statValue: number) => {
    setStats(prevStats => ({ ...prevStats, [statName]: statValue }));
  };

  const handleResistChange = (
    resistName: keyof ResistsUnion,
    resistValue: ResistsUnion,
  ) => {
    setResists(prevResists => ({ ...prevResists, [resistName]: resistValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const personaData = {
        name,
        inherits,
        item: item,
        itemr: itemr,
        lvl,
        resists,
        skills: skills.reduce(
          (acc, skill) => {
            acc[skill.name] = skill.cost;
            return acc;
          },
          {} as Record<string, number>,
        ),
        stats,
        trait,
        arcana,
        rare,
        special,
      };

      const response = await axios.put(
        `http://127.0.0.1:5000/personas/${personaName}`,
        personaData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );

      console.log(name);
      setSuccessMessage(response.data.message);
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setIsErrorModalOpen(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      {isSuccessModalOpen && (
        <SuccessModal
          message={successMessage}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}

      {isErrorModalOpen && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setIsErrorModalOpen(false)}
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Edit Persona</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Persona Name to Update
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={personaName}
            onChange={e => setPersonaName(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            onClick={handleChoosePersona}
          >
            Choose
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Level
          </label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={lvl === 0 ? "" : lvl}
            onChange={e => setLvl(Number(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Trait
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={trait}
            onChange={e => setTrait(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Inherits
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={inherits}
            onChange={
              //@ts-ignore
              e => setInherits(e.target.value)
            }
          >
            <option value="curse">curse</option>
            <option value="elec">elec</option>
            <option value="ice">ice</option>
            <option value="almighty">almighty</option>
            <option value="nuke">nuke</option>
            <option value="bless">bless</option>
            <option value="wind">wind</option>
            <option value="ailment">ailment</option>
            <option value="phys">phys</option>
            <option value="fire">fire</option>
            <option value="psy">psy</option>
            <option value="healing">healing</option>
            <option value="none">none</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Arcana
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={arcana}
            onChange={
              //@ts-ignore
              e => setArcana(e.target.value)
            }
          >
            <option value="Fool">Fool</option>
            <option value="Magician">Magician</option>
            <option value="Priestess">Priestess</option>
            <option value="Empress">Empress</option>
            <option value="Emperor">Emperor</option>
            <option value="Hierophant">Hierophant</option>
            <option value="Lovers">Lovers</option>
            <option value="Chariot">Chariot</option>
            <option value="Justice">Justice</option>
            <option value="Hermit">Hermit</option>
            <option value="Fortune">Fortune</option>
            <option value="Strength">Strength</option>
            <option value="Hanged">Hanged</option>
            <option value="Death">Death</option>
            <option value="Temperance">Temperance</option>
            <option value="Devil">Devil</option>
            <option value="Tower">Tower</option>
            <option value="Star">Star</option>
            <option value="Moon">Moon</option>
            <option value="Sun">Sun</option>
            <option value="Judgement">Judgement</option>
            <option value="World">World</option>
            <option value="Councillor">Councillor</option>
            <option value="Faith">Faith</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            item
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            itemr
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={itemr}
            onChange={e => setItemr(e.target.value)}
          />
        </div>

        {Object.entries(stats).map(([statName, statValue]) => (
          <div className="mb-4" key={statName}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {statName.toUpperCase()}
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={statValue === 0 ? "" : statValue}
              onChange={e =>
                handleStatChange(
                  statName as keyof Stats,
                  Number(e.target.value),
                )
              }
            />
          </div>
        ))}

        {skills.map((skill, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Skill {index + 1}
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Skill Name"
              value={skill.name}
              onChange={e =>
                handleSkillChange(index, e.target.value, skill.cost)
              }
            />
            <input
              type="number"
              className="w-full border rounded px-3 py-2 mt-2"
              placeholder="Skill Cost"
              value={skill.cost === 0 ? "" : skill.cost}
              onChange={e =>
                handleSkillChange(index, skill.name, Number(e.target.value))
              }
            />
          </div>
        ))}

        {Object.entries(resists).map(([resistName, resistValue]) => (
          <div className="mb-4" key={resistName}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {resistName.toUpperCase()}
            </label>
            <select
              className="w-full border rounded px-3 py-2"
              value={resistValue}
              onChange={e =>
                handleResistChange(
                  // @ts-ignore
                  resistName as keyof Resists,
                  e.target.value as ResistsUnion,
                )
              }
            >
              <option value="-">Nothing</option>
              <option value="d">Absorb</option>
              <option value="s">Resists</option>
              <option value="r">Repel</option>
              <option value="w">Weak</option>
              <option value="n">Null</option>
            </select>
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rare
          </label>
          <input
            type="checkbox"
            className="mr-2"
            checked={rare}
            onChange={e => setRare(e.target.checked)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Special
          </label>
          <input
            type="checkbox"
            className="mr-2"
            checked={special}
            onChange={e => setSpecial(e.target.checked)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PutPersonaForm;
