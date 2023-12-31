import { useEffect, useState } from "react";
import SkillEntry from "../types/skills/SkillEntry";
import axios from "axios";
import "../styles/skillList.css";
import TakeYourTime from "../components/utils/TakeYourTime";
import Navbar from "../components/utils/Navbar";
import SkillsTable from "../components/skills/SkillsTable";

const SkillListScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [skillList, setSkillList] = useState<Array<SkillEntry>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/skills");
        const skills = response.data;
        setSkillList(skills);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <TakeYourTime />
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="mb-10 overflow-y-auto">
            <Navbar />
          </div>
          <div className="text-2xl font-semibold text-center text-white">
            Skills
          </div>
          <div className="my-4 overflow-y-auto">
            <SkillsTable skillsEntries={skillList} />
          </div>
        </div>
      )}
    </>
  );
};

export default SkillListScreen;
