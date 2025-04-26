//-- enum -- week days -- create function (day)==> {if(this day is a weekend or not)}

enum WeekDays {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function isWeekend(day: WeekDays): string {
  const weekday = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return `${weekday[day]} is ${
    day === WeekDays.Friday || day === WeekDays.Saturday
      ? "Weekend"
      : "Not Weekend"
  }`;
}

console.log(isWeekend(WeekDays.Friday));
console.log(isWeekend(WeekDays.Saturday));
console.log(isWeekend(WeekDays.Sunday));
