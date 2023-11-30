import axios from "axios";
import { useAuth } from "../../state/AuthProvider";
import { useState } from "react";
import SuccessModal from "../utils/SuccessModal";
import ErrorModal from "../utils/ErrorModal";

const DeletePersonaForm: React.FC = () => {
  const { accessToken } = useAuth();
  const [personaName, setPersonaName] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/personas/${personaName}`,
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
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}

      {isErrorModalOpen && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setIsErrorModalOpen(false)}
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Delete Persona</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Persona Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={personaName}
            onChange={e => setPersonaName(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Persona
        </button>
      </form>
    </div>
  );
};

export default DeletePersonaForm;
