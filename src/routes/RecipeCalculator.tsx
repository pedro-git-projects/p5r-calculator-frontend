import FusionForm from "../components/calculator/FusionForm";
import Navbar from "../components/utils/Navbar";

const RecipeCalculator: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <FusionForm />
    </div>
  );
};

export default RecipeCalculator;
