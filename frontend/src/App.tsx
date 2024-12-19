import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import IzinJam from "./modules/izin_jam/module";
import IzinTidakMasuk from "./modules/izin_tidak_masuk/module";
import Lembur from "./modules/lembur/module";
import Cuti from "./modules/cuti/module";
import DashboardPage from "./pages/dashboard";
// import Ticket from "./modules/ticket/module"; // Uncomment when needed

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <div className="ml-64 w-full">
          <Routes>
            {/* Default route shows the login page */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/izin-jam" element={<IzinJam />} />
            <Route path="/izin-tidak-masuk" element={<IzinTidakMasuk />} />
            <Route path="/lembur" element={<Lembur />} />
            <Route path="/cuti" element={<Cuti />} />
            {/* <Route path="/ticket" element={<Ticket />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
