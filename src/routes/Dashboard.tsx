import PostPersonaForm from "../components/dashboard/PostPersonaForm";
import PutPersonaForm from "../components/dashboard/PutPersonaForm";
import { AuthProvider } from "../state/AuthProvider";

const Dashboard = () => {
  return (
    <AuthProvider>
      <PostPersonaForm />
      <PutPersonaForm />
    </AuthProvider>
  );
};

export default Dashboard;
