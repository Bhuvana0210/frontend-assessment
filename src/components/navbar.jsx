import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow dark:shadow-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Candidate Management
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded text-sm bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}
