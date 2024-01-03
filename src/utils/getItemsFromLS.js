export const getFromLS = (input) => {
  const getItem = localStorage.getItem(input);
  if (!getItem) {
    return [];
  }
  return JSON.parse(getItem);
};
