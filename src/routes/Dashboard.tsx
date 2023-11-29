import PostPersonaForm from "../components/dashboard/PostPersonaForm";
import { AuthProvider } from "../state/AuthProvider";

const Dashboard = () => {
  return (
    <AuthProvider>
      <PostPersonaForm />
    </AuthProvider>
  );
};

export default Dashboard;
