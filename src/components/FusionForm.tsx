import React, { useState, useEffect } from "react";
import Persona from "../types/compendium/Persona";
import axios from "axios";

interface FusionFormProps {}

const FusionForm: React.FC<FusionFormProps> = () => {
  const [persona1Name, setPersona1Name] = useState("");
  const [persona2Name, setPersona2Name] = useState("");
  const [fusionResult, setFusionResult] = useState<Persona | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [personaSuggestions, setPersonaSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchPersonaSuggestions = async () => {
      try {
        const response = await axios.get<Persona[]>(
          "http://127.0.0.1:5000/personas",
        );
        const suggestions = response.data.map(persona => persona.name);
        console.log(suggestions);
        setPersonaSuggestions(suggestions);
      } catch (err) {
        console.error("Error fetching persona suggestions:", err);
      }
    };

    fetchPersonaSuggestions();
  }, []);

  const handlePersona1Change = (value: string) => {
    setPersona1Name(value);
  };

  const handlePersona2Change = (value: string) => {
    setPersona2Name(value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get<Persona>(
        `http://127.0.0.1:5000/calculator/${persona1Name}/${persona2Name}`,
      );
      setFusionResult(response.data);
      setError(null);
    } catch (err) {
      setFusionResult(null);
      setError(
        "Persona not found. One or both of the specified personas do not exist.",
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
        <label
          htmlFor="persona1Name"
          className="text-lg font-semibold text-white"
        >
          Persona 1 Name:
        </label>
        <input
          type="text"
          id="persona1Name"
          value={persona1Name}
          onChange={e => handlePersona1Change(e.target.value)}
          className="border border-gray-300 p-2 rounded"
          list="persona1Suggestions"
        />
        <datalist id="persona1Suggestions">
          {personaSuggestions.map(suggestion => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>

        <label
          htmlFor="persona2Name"
          className="text-lg font-semibold text-white"
        >
          Persona 2 Name:
        </label>
        <input
          type="text"
          id="persona2Name"
          value={persona2Name}
          onChange={e => handlePersona2Change(e.target.value)}
          className="border border-gray-300 p-2 rounded"
          list="persona2Suggestions"
        />
        <datalist id="persona2Suggestions">
          {personaSuggestions.map(suggestion => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Fuse Personas
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {fusionResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Fusion Result:</h2>
          <pre>{JSON.stringify(fusionResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FusionForm;
