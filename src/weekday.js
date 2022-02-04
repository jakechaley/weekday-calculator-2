const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export function numDayOfWeek(dateString) {
  const parts = dateString.split('-');
  const date = new Date(parts[0], parts[1], parts[2])
  return date.getDay();
}

export function stringDayOfTheWeek(dateString) {
  return WEEKDAYS[numDayOfWeek(dateString)];
}