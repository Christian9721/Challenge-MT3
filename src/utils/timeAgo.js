export const toTimeAgo = (dueDate) => {
  const date = new Date(dueDate);
  const currentDate = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const dayDiff = Math.floor((currentDate - date) / dayMs);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  return rtf.format(-dayDiff, "day");
};

export const isBetweenDates = (dueDate) => {
  const date = new Date(dueDate);
  const currentDate = new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  return (
    date.getDate() >= currentDate.getDate() &&
    date.getDate() <= tomorrowDate.getDate()
  );
};
