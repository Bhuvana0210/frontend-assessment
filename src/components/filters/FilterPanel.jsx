import React, { useState } from "react";
import { jobOptions } from "../../data/options";

export default function FilterPanel({ setFilters }) {
    const [job, setJob] = useState([]);
    const [stage, setStage] = useState("");
    const [company, setCompany] = useState("");
    const [salaryMin, setSalaryMin] = useState("");
    const [salaryMax, setSalaryMax] = useState("");

    const toggleJob = (title) => {
        setJob((prev) =>
            prev.includes(title)
                ? prev.filter((j) => j !== title)
                : [...prev, title]
        );
    };

    const apply = () => {
        setFilters({
            job: [],
            stage: "",
            company: "",
            salaryMin: "",
            salaryMax: ""
        });

    };

    const clear = () => {
        setJob([]);
        setStage("");
        setCompany("");
        setSalaryMin("");
        setSalaryMax("");

        setFilters({});
    };

    return (
        <aside className="w-72 bg-white dark:bg-gray-900 border-r dark:border-gray-700 p-4">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Filters</h2>

            {/* JOBS */}
            <label className="font-semibold dark:text-gray-200">Jobs</label>
            <div className="border rounded p-2 mb-4 max-h-32 overflow-auto dark:border-gray-700">
                {jobOptions.map((title) => (
                    <label key={title} className="block text-sm dark:text-gray-300">
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
            <label className="font-semibold dark:text-gray-200">Stage</label>
            <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full border p-2 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded"
            >
                <option value="">Any Stage</option>
                <option>Applied</option>
                <option>Screening</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Hired</option>
            </select>

            {/* COMPANY */}
            <label className="font-semibold dark:text-gray-200">Company</label>
            <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border p-2 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded"
            >
                <option value="">Any Company</option>
                <option>Google</option>
                <option>Microsoft</option>
                <option>Amazon</option>
                <option>StartupX</option>
                <option>Infosys</option>
            </select>

            {/* SALARY */}
            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={salaryMin}
                placeholder="e.g. 300000"
                onChange={(e) => setSalaryMin(e.target.value)}
                className="w-full border p-2 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded"
            />

            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={salaryMax}
                placeholder="e.g. 1500000"
                onChange={(e) => setSalaryMax(e.target.value)}
                className="w-full border p-2 mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded"
            />


            <button
                onClick={apply}
                className="w-full bg-blue-600 text-white py-2 rounded mt-2"
            >
                Apply Filters
            </button>

            <button
                onClick={clear}
                className="w-full bg-gray-600 text-white py-2 rounded mt-2"
            >
                Clear All Filters
            </button>
        </aside>
    );
}
