import { useParams } from "react-router-dom";

const PersonaDetailsScreen: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return <>{name}</>;
};

export default PersonaDetailsScreen;
