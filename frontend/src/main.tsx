import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app"; // Ensure exact case
import "./styles/global.css"; // Import global Tailwind CSS or other styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
