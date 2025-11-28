import React from "react";

export default function Pagination({ page, pageSize, total, setPage, setPageSize }) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-between mt-4 px-3">

      {/* PAGE SIZE */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Rows per page:</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1); // reset when changing size
          }}
          className="border p-1 rounded dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* PAGE CONTROLS */}
      <div className="flex items-center gap-4">

        <button
          className="px-3 py-1 border rounded disabled:opacity-40 dark:border-gray-600"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded disabled:opacity-40 dark:border-gray-600"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>

      </div>
    </div>
  );
}
