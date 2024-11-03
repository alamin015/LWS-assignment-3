export const getDateFormat = (dateString) => {
  const date = new Date(dateString);

  // Use toLocaleDateString with options
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
