import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkmodeButton from "../components/darkmodeButton";
import PlaylistButton from "../components/PlaylistButton";

const Navigator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const goToSearch = () => {
    if (location.pathname !== "/search") {
      navigate("/search", { state: { query: searchQuery } });
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="card p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Link
          to="/"
          className="navButton bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          aria-label="Gå till hem"
        >
          Hem
        </Link>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök låt..."
          className="flex-1 min-w-[200px] bg-gray-100 text-black px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Skriv låtnamn"
        />

        <button
          onClick={goToSearch}
          className="navButton bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          aria-label="Sök"
        >
          Sök
        </button>

        <DarkmodeButton />
        <PlaylistButton />
      </div>
    </div>
  );
};

export default Navigator;
