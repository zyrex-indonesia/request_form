import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [batchId, setBatchId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Redirect to dashboard if already authenticated
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        batch_id: batchId,
      });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token); // Save token
        onLogin(); // Notify App of successful login
        navigate("/dashboard");
      } else {
        setError("Invalid username or batch ID. Please try again.");
      }
    } catch (err) {
      setError("Invalid username or batch ID. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/ZYREX Logo Hi-res-01.png"
            alt="Zyrex Logo"
            className="mx-auto"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="batchId" className="block text-sm font-semibold text-gray-700">
              Odoo Batch ID:
            </label>
            <input
              type="text"
              id="batchId"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              placeholder="Enter your batch ID"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm mt-2">
              <p>{error}</p>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
