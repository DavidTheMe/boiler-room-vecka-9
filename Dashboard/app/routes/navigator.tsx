import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="p-5 bg-blue-50 flex justify-center items-center space-x-2">
      
      {/* Home Button (Same Style as Search Button) */}
      <Link
        to="/"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
      >
        Home
      </Link>

      {/* Search Bar with Centered Button */}
      <form className="w-full max-w-md">
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="flex w-full border border-gray-300 rounded-lg bg-gray-50 focus-within:ring-blue-500 focus-within:border-blue-500">
          
          {/* Search Icon */}
          <div className="flex items-center px-3">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          {/* Search Input */}
          <input
            type="search"
            id="default-search"
            className="flex-grow p-3 text-sm text-gray-900 bg-transparent focus:outline-none"
            placeholder="Search artists, songs, albums..."
            required
          />

          {/* Search Button (Now Vertically Centered) */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-r-lg text-sm px-4 py-2"
          >
            Search
          </button>
          
        </div>
      </form>
      
    </div>
  );
};

export default Navigator;
