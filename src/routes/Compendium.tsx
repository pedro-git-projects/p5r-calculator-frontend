import { useState, useEffect } from "react";
import axios from "axios";
import Persona from "../types/compendium/Persona";
import PersonaTable from "../components/PersonaTable";
import TakeYourTime from "../components/TakeYourTime";

const CompendiumScreen: React.FC = () => {
  const [personas, setPersonas] = useState(Array<Persona>);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/personas")
      .then(response => {
        setPersonas(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <TakeYourTime /> : <PersonaTable personas={personas} />}
    </div>
  );
};

export default CompendiumScreen;
