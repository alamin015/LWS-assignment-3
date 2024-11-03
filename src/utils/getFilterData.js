export const getFilterData = (data, category) => {
  return data.filter((item) => item.category === category);
};
