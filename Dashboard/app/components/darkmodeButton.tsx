import { useEffect, useState } from "react";

const DarkmodeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    //Add darkmode class to elements
      document.body.classList.toggle("dark-mode", darkMode);
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.toggle("dark-mode", darkMode);
      });

      //Save localy
      // localStorage.SetItem('MY_WELCOME_BANNER_APP', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkmode}
      className="float-right mt-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      Darkmode
    </button>
  );
};

export default DarkmodeButton;