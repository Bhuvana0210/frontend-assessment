export function applyFilters(candidates, filters) {
  let result = [...candidates];

  if (filters.job && filters.job.length > 0) {
    result = result.filter(c =>
      c.jobs.some(j => filters.job.includes(j))
    );
  }

  if (filters.stage) {
    result = result.filter(c => c.stage === filters.stage);
  }

  if (filters.company) {
    result = result.filter(c => c.company === filters.company);
  }

  if (filters.salaryMin != null && filters.salaryMax != null) {
    result = result.filter(c =>
      c.expectedSalary >= filters.salaryMin &&
      c.expectedSalary <= filters.salaryMax
    );
  }

  return result;
}
