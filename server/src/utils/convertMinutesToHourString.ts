const addExtraZero = (hourMinute: number) => {
  return String(hourMinute).padStart(2, "0");
};

export const convertMinutesToHourString = (minutesAmount: number) => {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${addExtraZero(hours)}:${addExtraZero(minutes)}`;
};
