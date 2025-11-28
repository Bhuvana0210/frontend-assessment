export function applyFilters(candidates, filters) {
  let result = [...candidates];

  // JOB filter
  if (filters.job && filters.job.length > 0) {
    result = result.filter(c =>
      c.jobs.some(j => filters.job.includes(j))
    );
  }

  // STAGE filter
  if (filters.stage) {
    result = result.filter(c => c.stage === filters.stage);
  }

  // COMPANY filter
  if (filters.company) {
    result = result.filter(c => c.company === filters.company);
  }

  // SALARY range filter
  if (
    filters.salaryMin != null &&
    filters.salaryMax != null &&
    (filters.salaryMin !== 0 || filters.salaryMax !== 5000000)
  ) {
    result = result.filter(
      c =>
        c.expectedSalary >= filters.salaryMin &&
        c.expectedSalary <= filters.salaryMax
    );
  }

  return result;
}
