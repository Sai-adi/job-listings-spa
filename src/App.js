import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs"; 
import MyNavbar from "./components/Navbar"; // Ensure this path is correct

function App() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
  }, []);

  const toggleSaveJob = (job) => {
    let updatedJobs;
    if (savedJobs.some((saved) => saved.id === job.id)) {
      updatedJobs = savedJobs.filter((saved) => saved.id !== job.id);
    } else {
      updatedJobs = [...savedJobs, job];
    }
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <>
      <MyNavbar /> {/* ✅ Navbar added */}
      <Routes>
        <Route path="/" element={<Home toggleSaveJob={toggleSaveJob} savedJobs={savedJobs} />} />
        <Route path="/job/:id" element={<JobDetails toggleSaveJob={toggleSaveJob} savedJobs={savedJobs} />} />
        <Route path="/saved-jobs" element={<SavedJobs savedJobs={savedJobs} />} />
      </Routes>
    </>
  );
}

export default App;
