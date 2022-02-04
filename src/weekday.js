const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export function numDayOfWeek(date) {
  return date.getDay();
}

export function stringDayOfTheWeek(date) {
  return WEEKDAYS[numDayOfWeek(date)];
}