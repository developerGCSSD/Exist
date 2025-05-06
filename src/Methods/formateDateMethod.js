export const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',  // Short month (e.g., Jan)
      day: 'numeric',  // Numeric day (e.g., 7)
      year: 'numeric', // Full year (e.g., 2025)
    });
  };