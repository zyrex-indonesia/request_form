import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Login from "./modules/login/module";
import DashboardPage from "./pages/dashboard";
import './styles/global.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update the authentication state
  };

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Navbar />}

        {/* Main Content */}
        <div className={isAuthenticated ? "ml-64 w-full" : "w-full"}>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
