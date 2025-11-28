import React, { useState } from "react";
import { jobOptions } from "../../data/options";

export default function FilterPanel({ setFilters }) {
  const [job, setJob] = useState([]);
  const [stage, setStage] = useState("");
  const [company, setCompany] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");

  // Toggle job checkboxes
  const toggleJob = (title) => {
    if (job.includes(title)) {
      setJob(job.filter((x) => x !== title)); // remove
    } else {
      setJob([...job, title]); // add
    }
  };

  // APPLY FILTERS
  const apply = () => {
    setFilters({
      job,
      stage,
      company,
      salaryMin: salaryMin === "" ? 0 : Number(salaryMin),
      salaryMax: salaryMax === "" ? 5000000 : Number(salaryMax),
    });
  };

  // CLEAR ALL FILTERS
  const clear = () => {
    setJob([]);
    setStage("");
    setCompany("");
    setSalaryMin("");
    setSalaryMax("");

    setFilters({}); // Reset global filters
  };

  return (
<aside className="w-64 p-4 border-r bg-white dark:bg-gray-900 dark:border-gray-700">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* JOB MULTISELECT */}
      <label className="font-semibold">Jobs</label>
      <div className="flex flex-col border p-2 rounded mb-3 max-h-32 overflow-auto">
        {jobOptions.map((title) => (
          <label key={title} className="text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={job.includes(title)}
              onChange={() => toggleJob(title)}
              className="mr-2"
            />
            {title}
          </label>
        ))}
      </div>

      {/* STAGE */}
      <label className="font-semibold">Stage</label>
      <select
        className="w-full border mb-3 p-1 rounded"
        value={stage}
        onChange={(e) => setStage(e.target.value)}
      >
        <option value="">Any Stage</option>
        <option>Applied</option>
        <option>Screening</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Hired</option>
      </select>

      {/* COMPANY */}
      <label className="font-semibold">Company</label>
      <select
        className="w-full border mb-3 p-1 rounded"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="">Any Company</option>
        <option>Google</option>
        <option>Microsoft</option>
        <option>Amazon</option>
        <option>StartupX</option>
        <option>Infosys</option>
      </select>

      {/* SALARY MIN */}
      <label className="font-semibold">Salary Min</label>
      <input
        className="w-full border mb-3 p-1 rounded"
        type="number"
        placeholder="e.g. 300000"
        value={salaryMin}
        onChange={(e) => setSalaryMin(e.target.value)}
      />

      {/* SALARY MAX */}
      <label className="font-semibold">Salary Max</label>
      <input
        className="w-full border mb-3 p-1 rounded"
        type="number"
        placeholder="e.g. 1500000"
        value={salaryMax}
        onChange={(e) => setSalaryMax(e.target.value)}
      />

      {/* APPLY BUTTON */}
      <button
        onClick={apply}
        className="w-full bg-blue-600 text-white py-2 rounded mt-3"
      >
        Apply Filters
      </button>

      {/* CLEAR BUTTON */}
      <button
        onClick={clear}
        className="w-full bg-gray-600 text-white py-2 rounded mt-3"
      >
        Clear All Filters
      </button>
    </aside>
  );
}
