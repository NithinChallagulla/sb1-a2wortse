// Convert January 1st, 2025 00:00:00 IST to UTC
// IST is UTC+5:30, so we subtract 5 hours and 30 minutes from IST time
export const TIMER_CONFIG = {
  TARGET_DATE: new Date('2025-01-01T00:00:00+05:30').getTime(),
};
