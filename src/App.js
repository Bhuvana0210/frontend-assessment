import React, { useMemo, useState } from "react";
import { candidates as mock } from "./data/candidates";

import { applyFilters } from "./utils/filterUtils";
import { applySort } from "./utils/sortUtils";

import FilterPanel from "./components/filters/FilterPanel";
import DataTable from "./components/table/DataTable";
import FooterInfo from "./components/table/FooterInfo";
import ProfileModal from "./components/profile/ProfileModal";
import Navbar from "./components/navbar"

function App() {
  const [candidates, setCandidates] = useState(mock);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ column: null, direction: "asc" });
  const [selectedIds, setSelectedIds] = useState([]);
  const [profileCandidate, setProfileCandidate] = useState(null);

  // Derived state: filtered + sorted
  const filtered = useMemo(() => applyFilters(candidates, filters), [candidates, filters]);
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);

  const updateCandidate = (id, updates) => {
    setCandidates(prev =>
      prev.map(c => (c.id === id ? { ...c, ...updates } : c))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white">

      <Navbar />



      <FilterPanel setFilters={setFilters} />

      <div className="flex-1 p-4">
        <DataTable
          rows={sorted}
          sort={sort}
          setSort={setSort}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          onEdit={updateCandidate}
          onRowClick={setProfileCandidate}
        />

        <FooterInfo total={sorted.length} selected={selectedIds.length} />
      </div>

      {profileCandidate && (
        <ProfileModal
          candidate={profileCandidate}
          onClose={() => setProfileCandidate(null)}
        />
      )}
    </div>
  );
}

export default App;
