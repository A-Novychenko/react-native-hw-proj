export const getTimeComment = (time) => {
  const monthArr = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "ноября",
    "декабря",
  ];

  const date = new Date(Number(time));
  const day = date.getDate();
  const month = monthArr[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatHours = hours < 10 ? `0${hours}` : hours;
  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${day} ${month}, ${year} | ${formatHours}:${formatMinutes}`;
};
