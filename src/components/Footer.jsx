import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center max-w-full ">
        {/* Jobs Locations */}
        <div className="flex justify-between mx-auto">
          <div className="text-gray-800 mb-6">
            <div className="text-lg font-semibold mb-2">JOBS IN INDIA</div>
            <div className="space-x-3 w-[50%] flex mx-auto flex-wrap">
              <p>#Mumbai</p>
              <p>#Delhi</p>
              <p>#Ajmer</p>
              <p>#Pune</p>
              <p>#Hyderabad</p>
              <p>#Agra</p>
              <p>#Chennai</p>
              <p>#Kolkata</p>
              <p>#Indore</p>
              <p>#Gurugram</p>
              <p>#Jaipur</p>
              <p>#Ahmedabad</p>
            </div>
          </div>

          <div className="text-gray-800 mb-6">
            <div className="text-lg font-semibold mb-2">INTERNATIONAL JOBS</div>
            <div className="space-x-3 w-[50%] flex mx-auto flex-wrap">
              <p>#Africa</p>
              <p>#USA</p>
              <p>#UK</p>
              <p>#Australia</p>
              <p>#Canada</p>
              <p>#Singapore</p>
              <p>#Dubai</p>
              <p>#Saudi Arabia</p>
              <p>#New Zealand</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 border-y-2 py-3 border-blue-600">
          <div>
            <div className="text-4xl font-bold text-blue-600">31258</div>
            <div className="text-gray-700">Jobs Posted</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">15153</div>
            <div className="text-gray-700">Jobs Filled</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">19967</div>
            <div className="text-gray-700">Employers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">1295533</div>
            <div className="text-gray-700">Active Users</div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600 mb-6 mx-4 text-justify">
          <strong>Disclaimer:</strong> All Trademarks and Logos are the property
          of their respective owners, depicted here purely for representation
          purpose. Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to
          evaluate independently. Jobringer.com shall not have any
          responsibility in this regard. All Jobseeker services are strictly
          designed & meant only for job search assistance and to maximize the
          chances for the jobseekers to get their dream job. All Job Seeker
          Credentials and Employment Opportunities are subject to individual
          merit & evaluation. We do not guarantee any job to any jobseeker.
        </p>

        {/* Recognitions */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <div className="text-blue-600 font-semibold">Recognized By</div>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">
            #startupindia
          </span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-blue-600 text-xl mb-4">
          <Link to="#">🌐</Link>
          <Link to="#">📘</Link>
          <Link to="#">🐦</Link>
          <Link to="#">📷</Link>
          <Link to="#">🎥</Link>
          <Link to="#">🔗</Link>
        </div>

        {/* Footer Links */}
        <div className="text-gray-600 text-sm space-x-6">
          <Link to="/terms" className="hover:text-blue-600">
            Terms and conditions
          </Link>
          <Link to="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:text-blue-600">
            Refund / Cancellation Policy
          </Link>
          <Link to="/about-us" className="hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-blue-600">
            Contact Us
          </Link>
          <Link to="/faq" className="hover:text-blue-600">
            FAQ
          </Link>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          &copy; All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
