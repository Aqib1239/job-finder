import React from "react";

const FilterSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Job Type</label>
        <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400">
          <option value="">All</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Salary Range</label>
        <input
          type="range"
          min="20000"
          max="200000"
          className="w-full"
        />
        <p className="text-sm text-gray-600 mt-2">20,000 - 200,000</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
