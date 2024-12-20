import React, { useEffect } from "react";
import LoginModule from "../../modules/login/module"; // Correct path for your module
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication token
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Redirect to dashboard if already authenticated
      navigate("/dashboard");
    }
  }, [navigate]);

  return <LoginModule onLogin={onLogin} />;
};

export default LoginPage;
