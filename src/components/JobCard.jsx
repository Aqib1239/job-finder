import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex gap-2">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-8 h-8 object-contain mb-4 flex items-center rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-sm text-gray-800 mb-3">{job.company}</p>
        </div>
      </div>
      <p className="text-sm text-gray-800 flex items-center gap-1 py-1">
        <IoEarthSharp size={16} /> {job.location}
      </p>
      <div className="flex gap-12">
        <p className="text-sm text-gray-800 flex items-center gap-1">
          <GiTakeMyMoney size={16} /> {job.salary}
        </p>
        <p className="text-sm text-gray-800 flex items-center gap-1">
          <FaSuitcase size={16} /> {job.experience}
        </p>
      </div>
      <p className="text-sm text-gray-800 flex items-center gap-1 py-1">
        <MdAccessTimeFilled size={16} /> {job.type}
      </p>
      <div className="flex justify-between text-center">
        <button className="mt-4 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700">
          Apply Now
        </button>
        <button className="mt-4 text-gray-600 hover:text-[#000]">
          <IoShareSocialSharp size={24} />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
