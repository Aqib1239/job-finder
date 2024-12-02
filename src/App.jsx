import React, { useEffect, useRef, useState } from "react";
import JobList from "./components/JobList";
import FilterSidebar from "./components/FilterSideBar";
import ChatBotModal from "./components/ChatBotModal";
import Footer from "./components/Footer";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import JobseekerLoginModal from "./components/JobseekerLogin";
import EmployerLoginModal from "./components/EmployerLogin";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isJobseekerModalOpen, setIsJobseekerModalOpen] = useState(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);

  const toggleJobseekerModal = () =>
    setIsJobseekerModalOpen(!isJobseekerModalOpen);
  const toggleEmployerModal = () =>
    setIsEmployerModalOpen(!isEmployerModalOpen);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
    } else {
      menuRef.current.style.height = "0";
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 flex justify-between pt-6">
        <div className="text-center flex flex-col">
          <h2 className="text-2xl font-bold">JobFinder</h2>
          <p className="text-sm mt-1">Find your dream job today!</p>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-white text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? <IoCloseSharp /> : <TiThMenu />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`${
            isMenuOpen
              ? "flex-col absolute top-16 left-0 w-full bg-blue-600 p-4 mt-4 gap-4 transition-all duration-100 ease-in-out overflow-hidden"
              : "hidden"
          } lg:flex lg:flex-row lg:gap-6 lg:static lg:w-auto lg:p-0`}
        >
          <button
            onClick={toggleJobseekerModal}
            className="font-medium bg-white text-blue-600 px-3 py-1 rounded-xl h-10 hover:bg-blue-700 border-2 border-white hover:text-white transition-all duration-200"
          >
            Jobseeker Login
          </button>
          <button
            onClick={toggleEmployerModal}
            className="font-medium bg-white text-blue-600 px-3 py-1 rounded-xl h-10 hover:bg-blue-700 border-2 border-white hover:text-white transition-all duration-200 ml-2"
          >
            Employer Login
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row gap-6 p-6">
        <aside className="lg:w-1/4">
          <FilterSidebar />
        </aside>
        <section className="lg:w-3/4">
          <JobList />
          <ChatBotModal />
        </section>
      </main>

      <Footer />

      <JobseekerLoginModal
        isOpen={isJobseekerModalOpen}
        onClose={toggleJobseekerModal}
      />

      <EmployerLoginModal
        isOpen={isEmployerModalOpen}
        onClose={toggleEmployerModal}
      />
    </div>
  );
};

export default App;
