//* The isToday function checks if a given date (date) is the same as today's date. It compares the day, month, and year of the provided date with the current date (today).

export const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };