import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Optional: If you want to add specific styling for the login module.

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [batchId, setBatchId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username,
        batch_id: batchId,
      });

      if (response.status === 200) {
        // Navigate to the dashboard after successful login
        navigate("/dashboard");
      }
    } catch (err: any) {
      setError("Invalid username or batch ID. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="batch_id">Batch ID</label>
          <input
            type="text"
            id="batch_id"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
            placeholder="Enter your Batch ID"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
