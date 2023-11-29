import FusionForm from "../components/FusionForm";
import Navbar from "../components/Navbar";

const RecipeCalculator: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <FusionForm />
    </div>
  );
};

export default RecipeCalculator;
