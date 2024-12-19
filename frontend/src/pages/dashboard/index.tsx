import React from "react";
import AdminDashboard from "../../modules/dashboard/admin";
import UserDashboard from "../../modules/dashboard/user";

const DashboardPage: React.FC = () => {
  // Simulate role-based rendering (replace with real role logic)
  const role = localStorage.getItem("role"); // e.g., 'admin' or 'user'

  return (
    <div>
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default DashboardPage;
