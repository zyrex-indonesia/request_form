import React from "react";
import LoginModule from "../../modules/login/module"; // Correct path for your module

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return <LoginModule onLogin={onLogin} />;
};

export default LoginPage;
