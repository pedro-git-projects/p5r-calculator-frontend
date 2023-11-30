import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../state/AuthProvider";
import ElementUnion from "../../types/skills/ElementUnion";
import TargetUnion from "../../types/skills/TargetUnion";
import SuccessModal from "../utils/SuccessModal";
import ErrorModal from "../utils/ErrorModal";

const PostSkillForm: React.FC = () => {
  const { accessToken } = useAuth();
  const [element, setElement] = useState<ElementUnion>("pas");
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [effect, setEffect] = useState<string>("");
  const [target, setTarget] = useState<TargetUnion>("Self");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const skillData = {
        element,
        name,
        cost,
        effect,
        target,
      };

      const response = await axios.post(
        "http://127.0.0.1:5000/skills",
        skillData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );

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
          onClose={() => {
            setIsSuccessModalOpen(false);
          }}
        />
      )}

      {isErrorModalOpen && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setIsErrorModalOpen(false)}
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Create Skill</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Element
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={element}
            onChange={e => setElement(e.target.value as ElementUnion)}
          >
            <option value="fir">Fire</option>
            <option value="pas">Passive</option>
            <option value="sup">Support</option>
            <option value="lig">Light</option>
            <option value="ice">Ice</option>
            <option value="ele">Electric</option>
            <option value="psy">Psychic</option>
            <option value="win">Wind</option>
            <option value="ail">Ailment</option>
            <option value="gun">Gun</option>
            <option value="dar">Curse</option>
            <option value="nuk">Nuke</option>
            <option value="alm">Almighty</option>
            <option value="rec">Healing</option>
            <option value="phy">Physical</option>
            <option value="none">None</option>
          </select>
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
            Cost
          </label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={cost === 0 ? "" : cost}
            onChange={e => setCost(Number(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Effect
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={effect}
            onChange={e => setEffect(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Target
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={target}
            onChange={e => setTarget(e.target.value as TargetUnion)}
          >
            <option value="Self">Self</option>
            <option value="All allies">All Allies</option>
            <option value="1 foe">1 Foe</option>
            <option value="All foes">All Foes</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostSkillForm;
