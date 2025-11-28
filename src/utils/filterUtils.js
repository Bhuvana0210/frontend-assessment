export function applyFilters(candidates, filters) {
  let result = [...candidates];

  // JOB FILTER
  if (filters.job && filters.job.length > 0) {
    result = result.filter((c) =>
      c.jobs.some((j) => filters.job.includes(j))
    );
  }

  // STAGE FILTER
  if (filters.stage && filters.stage !== "") {
    result = result.filter((c) => c.stage === filters.stage);
  }

  // COMPANY FILTER
  if (filters.company && filters.company !== "") {
    result = result.filter((c) => c.company === filters.company);
  }

 // SALARY RANGE FILTER
let min = filters.salaryMin;
let max = filters.salaryMax;

// If empty or undefined → do not filter
if (min === "" || min == null) min = null;
if (max === "" || max == null) max = null;

// Convert to numbers only if valid numeric value
min = min !== null && !isNaN(Number(min)) ? Number(min) : null;
max = max !== null && !isNaN(Number(max)) ? Number(max) : null;

// Apply only IF at least one valid bound exists
if (min !== null || max !== null) {
  result = result.filter((c) => {
    const salary = c.expectedSalary;
    if (min !== null && salary < min) return false;
    if (max !== null && salary > max) return false;
    return true;
  });
}

  return result;
}
