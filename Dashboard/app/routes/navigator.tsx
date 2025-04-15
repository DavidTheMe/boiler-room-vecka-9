import { Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";
import type { ReactNode } from "react";
import { useState } from "react";
import DarkmodeButton from "../components/darkmodeButton";
//import Footer from "../components/Footer/footer";

const Navigator = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const goToSearch = (event) => {
    setInputValue(event.target.value);
    if (location.pathname != "/search") {
      navigate("/search");
    }
  };

  return (
    <>
      <div className="p-5 bg-blue-50 card">
        <Link
          to="/"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
        <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        value={searchQuery}
         className="bg-gray-300 border-solid border-gray-600 rounded-md border-2 text-black"></input>
        <Link
          to="/search"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          state={{ query: searchQuery }}
        >
          Search
        </Link>
        <DarkmodeButton />
      </div>
    </>
  );
};

export default Navigator;
