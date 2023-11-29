import DashboardLogin from "../components/DashboardLogin";
import { AuthProvider } from "../state/AuthProvider";

const Login = () => {
  return (
    <AuthProvider>
      <DashboardLogin />
    </AuthProvider>
  );
};

export default Login;
