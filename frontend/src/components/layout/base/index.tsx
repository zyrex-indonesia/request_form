import React, { ReactNode } from "react";
import Navbar from "../navbar"; // Import the navbar component

interface BaseLayoutProps {
  children: ReactNode; // Allows any content to be passed between Header and Footer
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar/Navbar */}
      <div className="fixed top-0 left-0 h-screen">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
