import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-200 w-64 h-screen fixed top-0 left-0 flex flex-col items-center py-8">
      {/* Logo Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-red-600">zyrex</h1>
      </div>

      {/* Navigation Links */}
      <div className="w-full">
        <ul className="space-y-4">
          <li>
            <Link
              to="/izin-jam"
              className="block text-center bg-white border border-gray-400 py-2 px-4 rounded hover:bg-gray-100"
            >
              FORM IJIN JAM
            </Link>
          </li>
          <li>
            <Link
              to="/izin-tidak-masuk"
              className="block text-center bg-white border border-gray-400 py-2 px-4 rounded hover:bg-gray-100"
            >
              FORM IJIN TIDAK MASUK KERJA
            </Link>
          </li>
          <li>
            <Link
              to="/lembur"
              className="block text-center bg-white border border-gray-400 py-2 px-4 rounded hover:bg-gray-100"
            >
              Formulir Lembur Divisi
            </Link>
          </li>
          <li>
            <Link
              to="/cuti"
              className="block text-center bg-white border border-gray-400 py-2 px-4 rounded hover:bg-gray-100"
            >
              BUKTI PERMOHONAN CUTI
            </Link>
          </li>
          <li>
            <Link
              to="/ticket"
              className="block text-center bg-white border border-gray-400 py-2 px-4 rounded hover:bg-gray-100"
            >
              Ticket Help Desk
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
