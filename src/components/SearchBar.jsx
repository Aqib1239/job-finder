import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, location, setLocation }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <form
        className="flex flex-col gap-2 md:flex-row md:gap-4"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search by title or keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
