import { useNavigate } from "react-router-dom";
import DeletePersonaForm from "../components/dashboard/DeletePersonaForm";
import PostPersonaForm from "../components/dashboard/PostPersonaForm";
import PostSkillForm from "../components/dashboard/PostSkillForm";
import PutPersonaForm from "../components/dashboard/PutPersonaForm";
import { useAuth } from "../state/AuthProvider";
import { useEffect } from "react";

const Dashboard = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
if (!accessToken) {
      navigate("/login")
  }
      }, [accessToken, navigate]);
  
  return (
    <>
      <PostPersonaForm />
      <PutPersonaForm />
      <DeletePersonaForm />
      <PostSkillForm />
    </>
  );
};

export default Dashboard;
