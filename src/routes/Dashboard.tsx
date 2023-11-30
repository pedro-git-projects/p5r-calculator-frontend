import DeletePersonaForm from "../components/dashboard/DeletePersonaForm";
import PostPersonaForm from "../components/dashboard/PostPersonaForm";
import PostSkillForm from "../components/dashboard/PostSkillForm";
import PutPersonaForm from "../components/dashboard/PutPersonaForm";
import { AuthProvider } from "../state/AuthProvider";

const Dashboard = () => {
  return (
    <AuthProvider>
      <PostPersonaForm />
      <PutPersonaForm />
      <DeletePersonaForm />
      <PostSkillForm />
    </AuthProvider>
  );
};

export default Dashboard;
