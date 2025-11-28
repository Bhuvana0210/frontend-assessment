import React, { useMemo, useState } from "react";
import { candidates as mock } from "./data/candidates";

import { applyFilters } from "./utils/filterUtils";
import { applySort } from "./utils/sortUtils";

import FilterPanel from "./components/filters/FilterPanel";
import DataTable from "./components/table/DataTable";
import FooterInfo from "./components/table/FooterInfo";
import ProfileModal from "./components/profile/ProfileModal";
import Navbar from "./components/navbar";
import Pagination from "./components/table/Pagination";

function App() {
  const [candidates, setCandidates] = useState(mock);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ column: null, direction: "asc" });
  const [selectedIds, setSelectedIds] = useState([]);
  const [profileCandidate, setProfileCandidate] = useState(null);

  // PAGINATION STATE
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // FILTER + SORT
  const filtered = useMemo(
    () => applyFilters(candidates, filters),
    [candidates, filters]
  );

  const sorted = useMemo(
    () => applySort(filtered, sort),
    [filtered, sort]
  );

  // PAGINATED DATA
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = sorted.slice(start, end);

  const updateCandidate = (id, updates) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* BODY - FULL HEIGHT */}
      <div className="h-[calc(100vh-64px)] flex overflow-hidden">

        {/* LEFT ASIDE - SAME HEIGHT, SCROLLS */}
        <div className="w-72 h-full overflow-y-auto overflow-x-hidden border-r dark:border-gray-700">
          <FilterPanel setFilters={setFilters} />
        </div>

        {/* RIGHT SIDE — FULL HEIGHT FLEX COLUMN */}
        <div className="flex-1 h-full flex flex-col overflow-hidden">

          {/* TABLE AREA — ALWAYS FILLS HEIGHT */}
          <div className="flex-1 overflow-auto min-h-0 pl-4">
            <div className="h-full">
              <DataTable
                rows={paginated}
                sort={sort}
                setSort={setSort}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                onEdit={updateCandidate}
                onRowClick={setProfileCandidate}
              />
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t dark:border-gray-700 p-3 bg-gray-100 dark:bg-gray-900">
            <FooterInfo
              total={sorted.length}
              selected={selectedIds.length}
            />
            <Pagination
              page={page}
              pageSize={pageSize}
              total={sorted.length}
              setPage={setPage}
              setPageSize={setPageSize}
            />
          </div>

        </div>



      </div>

      {/* PROFILE MODAL */}
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
