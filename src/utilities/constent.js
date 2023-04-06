export const loadedData = async () => {
  const res = await fetch("https://api.itbook.store/1.0/new");
  const data = await res.json();
  return data;
};
