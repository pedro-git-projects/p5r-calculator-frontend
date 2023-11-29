import { useState } from "react";
import InheritanceUnion from "../../types/compendium/InheritanceUnion";
import ArcanaUnion from "../../types/compendium/ArcanaUnion";

const PostPersonaForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [inherits, setInherits] = useState<InheritanceUnion>("none");
  const item = useState("");
  const itemr = useState("");
  const [lvl, setLvl] = useState<number>(0);
  const [trait, setTrait] = useState("");
  const [arcana, setArcana] = useState<ArcanaUnion>("Sun");
  const [rare, setRare] = useState(false);
  const [special, setSpecial] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      inherits,
      item,
      itemr,
      lvl,
      trait,
      arcana,
      rare,
      special,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Post Persona Form</h2>
      <form onSubmit={handleSubmit}>
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
            Arcana
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={arcana}
            onChange={e => setArcana(e.target.value)}
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

export default PostPersonaForm;
