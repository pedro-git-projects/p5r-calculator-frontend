import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Persona {
  id: number;
  name: string;
  inherits: string;
  item: string;
  itemr: string;
  lvl: number;
  trait: string;
  arcana: string;
  rare: boolean;
  special: boolean;
  resists: { [key: string]: string };
  skills: { [key: string]: number };
  stats: { [key: string]: number };
}

const SearchPersonas: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [personas, setPersonas] = useState<Persona[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/personas/${searchText}`,
      );
      setPersonas(response.data);
    } catch (error) {
      console.error("Error fetching personas:", error);
      setPersonas([]);
    }
  };

  return (
    <div className="mt-10 p-4 text-center">
      <input
        className="p-2 border border-gray-700 rounded mr-2 focus:outline-none focus:border-yellow-500"
        type="text"
        placeholder="Enter persona name"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button
        className="text-white px-4 py-2 rounded focus:outline-none bg-[#732424] hover:bg-[#611c1c]"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="mt-4">
        {personas.map(persona => (
          <div key={persona.id} className="mb-2">
            <Link
              className="text-red-500 hover:underline hover:text-yellow-500"
              to={`/persona-details/${persona.name}`}
            >
              {persona.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchPersonas;
