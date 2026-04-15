export const getStreakData = () => {
  return JSON.parse(localStorage.getItem("streak")) || {};
};

export const markToday = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  const today = `${yyyy}-${mm}-${dd}`;
  const data = getStreakData();

  data[today] = true;

  localStorage.setItem("streak", JSON.stringify(data));
};