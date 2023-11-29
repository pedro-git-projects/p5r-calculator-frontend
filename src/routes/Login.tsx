import DashboardLogin from "../components/dashboard/DashboardLogin";
import { AuthProvider } from "../state/AuthProvider";

const Login = () => {
  return (
    <AuthProvider>
      <DashboardLogin />
    </AuthProvider>
  );
};

export default Login;
