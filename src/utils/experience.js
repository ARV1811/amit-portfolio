/**
 * Calculates experience durations dynamically based on job tenures and the current date.
 */

/**
 * Calculates the duration of a job in months.
 * For past jobs, returns fixedMonths or calculates inclusive calendar months between start and end date.
 * For the current job, auto-increments from start date up to the current month.
 */
export const getJobMonths = (job, now = new Date()) => {
  if (job.fixedMonths) {
    return job.fixedMonths;
  }

  if (job.startDate) {
    const start = new Date(job.startDate);
    const end = job.isCurrent || !job.endDate ? now : new Date(job.endDate);

    const startYear = start.getFullYear();
    const startMonth = start.getMonth(); // 0-indexed
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    let months = (endYear - startYear) * 12 + (endMonth - startMonth);
    
    // Inclusive of start and current/end month
    months += 1;

    return Math.max(1, months);
  }

  return 0;
};

/**
 * Formats months into human-readable duration, e.g. "5 mos", "1 yr 3 mos", "2 yrs"
 */
export const formatDuration = (totalMonths) => {
  if (!totalMonths || totalMonths <= 0) return '0 mos';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mo${months === 1 ? '' : 's'}`;
  }
  if (months === 0) {
    return `${years} yr${years === 1 ? '' : 's'}`;
  }
  return `${years} yr${years === 1 ? '' : 's'} ${months} mo${months === 1 ? '' : 's'}`;
};

/**
 * Calculates total experience across all jobs in months.
 * Only includes jobs where includeInTotal is not explicitly false.
 */
export const getTotalExperienceMonths = (experienceList = [], now = new Date()) => {
  return experienceList
    .filter((job) => job.includeInTotal !== false)
    .reduce((acc, job) => acc + getJobMonths(job, now), 0);
};

/**
 * Formats total experience into decimal format with plus, e.g. "3.2+"
 */
export const formatExperienceDecimal = (totalMonths) => {
  const years = (totalMonths / 12).toFixed(1);
  return `${years}+`;
};
