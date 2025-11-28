import React, { useState } from "react";

export default function FilterPanel({ setFilters }) {
  const [job, setJob] = useState([]);
  const [stage, setStage] = useState("");
  const [company, setCompany] = useState("");
  const [salaryMin, setSalaryMin] = useState(0);
  const [salaryMax, setSalaryMax] = useState(5000000);

  const apply = () => {
    setFilters({ job, stage, company, salaryMin, salaryMax });
  };

  return (
    <aside className="w-64 bg-white p-4 border-r">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      <label>Stage</label>
      <select className="w-full border mb-3" onChange={e => setStage(e.target.value)}>
        <option value="">Any</option>
        <option>Applied</option>
        <option>Screening</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Hired</option>
      </select>

      <label>Company</label>
      <select className="w-full border mb-3" onChange={e => setCompany(e.target.value)}>
        <option value="">Any</option>
        <option>Google</option>
        <option>Microsoft</option>
        <option>Amazon</option>
        <option>StartupX</option>
        <option>Infosys</option>
      </select>

      <label>Salary Min</label>
      <input
        className="w-full border mb-3"
        type="number"
        onChange={e => setSalaryMin(Number(e.target.value))}
      />

      <label>Salary Max</label>
      <input
        className="w-full border mb-3"
        type="number"
        onChange={e => setSalaryMax(Number(e.target.value))}
      />

      <button
        onClick={apply}
        className="w-full bg-blue-600 text-white py-2 rounded mt-3"
      >
        Apply Filters
      </button>
    </aside>
  );
}
