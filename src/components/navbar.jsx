import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className="
      flex items-center justify-between 
      px-6 py-4 
      bg-white dark:bg-gray-900 
      shadow-sm 
      border-b border-gray-200 dark:border-gray-800
    "
    >
      {/* Title */}
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Candidate Management
      </h1>

      {/* THEME TOGGLE */}
      <button
        onClick={toggleTheme}
        className="
          p-2 rounded-full 
          bg-gray-100 dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700
          hover:bg-gray-200 dark:hover:bg-gray-700
          transition-all duration-200
        "
      >
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 text-gray-700" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-300" />
        )}
      </button>
    </nav>
  );
}
