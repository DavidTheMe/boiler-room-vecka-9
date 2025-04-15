"use client";

import { useEffect, useState } from "react";

const DarkmodeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      document.body.classList.toggle("dark-mode", darkMode);
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.toggle("dark-mode", darkMode);
      });
  }, [darkMode]); // 👈 USE the value, not the hook

  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkmode}
      className="float-right mt-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      Toggle darkmode
    </button>
  );
};

export default DarkmodeButton;
