import React, { useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$120,000 - $150,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Meta",
    location: "Menlo Park, CA",
    salary: "$110,000 - $140,000",
    type: "Full-Time",
    experience: "2-4 years",
    logo: "https://logo.clearbit.com/meta.com",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$130,000 - $160,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$120,000 - $150,000",
    type: "Full-Time",
    experience: "5+ years",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    id: 5,
    title: "UX Designer",
    company: "Adobe",
    location: "San Jose, CA",
    salary: "$90,000 - $120,000",
    type: "Full-Time",
    experience: "2-3 years",
    logo: "https://logo.clearbit.com/adobe.com",
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    salary: "$140,000 - $180,000",
    type: "Full-Time",
    experience: "4-6 years",
    logo: "https://logo.clearbit.com/netflix.com",
  },
  {
    id: 7,
    title: "Marketing Specialist",
    company: "Spotify",
    location: "New York, NY",
    salary: "$80,000 - $100,000",
    type: "Full-Time",
    experience: "2-4 years",
    logo: "https://logo.clearbit.com/spotify.com",
  },
  {
    id: 8,
    title: "Cloud Architect",
    company: "IBM",
    location: "Armonk, NY",
    salary: "$130,000 - $160,000",
    type: "Full-Time",
    experience: "5+ years",
    logo: "https://logo.clearbit.com/ibm.com",
  },
  {
    id: 9,
    title: "Mobile Developer",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$130,000 - $170,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/apple.com",
  },
  {
    id: 10,
    title: "Sales Manager",
    company: "Salesforce",
    location: "San Francisco, CA",
    salary: "$100,000 - $130,000",
    type: "Full-Time",
    experience: "4-6 years",
    logo: "https://logo.clearbit.com/salesforce.com",
  },
  {
    id: 11,
    title: "Game Developer",
    company: "Electronic Arts",
    location: "Redwood City, CA",
    salary: "$100,000 - $130,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/ea.com",
  },
  {
    id: 12,
    title: "Technical Writer",
    company: "Oracle",
    location: "Austin, TX",
    salary: "$85,000 - $110,000",
    type: "Full-Time",
    experience: "2-3 years",
    logo: "https://logo.clearbit.com/oracle.com",
  },
  {
    id: 13,
    title: "DevOps Engineer",
    company: "Red Hat",
    location: "Raleigh, NC",
    salary: "$110,000 - $140,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/redhat.com",
  },
  {
    id: 14,
    title: "AI Researcher",
    company: "OpenAI",
    location: "San Francisco, CA",
    salary: "$150,000 - $200,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/openai.com",
  },
  {
    id: 15,
    title: "Cybersecurity Analyst",
    company: "Palo Alto Networks",
    location: "Santa Clara, CA",
    salary: "$120,000 - $150,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/paloaltonetworks.com",
  },
  {
    id: 16,
    title: "Business Analyst",
    company: "Deloitte",
    location: "Chicago, IL",
    salary: "$90,000 - $120,000",
    type: "Full-Time",
    experience: "2-4 years",
    logo: "https://logo.clearbit.com/deloitte.com",
  },
  {
    id: 17,
    title: "Data Engineer",
    company: "Snowflake",
    location: "Bozeman, MT",
    salary: "$120,000 - $150,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/snowflake.com",
  },
  {
    id: 18,
    title: "SEO Specialist",
    company: "HubSpot",
    location: "Cambridge, MA",
    salary: "$70,000 - $90,000",
    type: "Full-Time",
    experience: "1-2 years",
    logo: "https://logo.clearbit.com/hubspot.com",
  },
  {
    id: 19,
    title: "Quality Assurance Engineer",
    company: "Cisco",
    location: "San Jose, CA",
    salary: "$90,000 - $120,000",
    type: "Full-Time",
    experience: "2-4 years",
    logo: "https://logo.clearbit.com/cisco.com",
  },
  {
    id: 20,
    title: "Full Stack Developer",
    company: "Stripe",
    location: "Dublin, Ireland",
    salary: "$100,000 - $140,000",
    type: "Full-Time",
    experience: "3-5 years",
    logo: "https://logo.clearbit.com/stripe.com",
  },
];

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Filter jobs based on search term and location
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
      />

      {/* Job Listings */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500">No jobs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
