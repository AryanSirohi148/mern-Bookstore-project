import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";

// Initialize dark mode as default
const savedTheme = localStorage.getItem("theme");
const theme = savedTheme || "dark";
if (theme === "dark") {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
  document.body.classList.remove("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
