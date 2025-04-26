"use strict";
//-- enum -- week days -- create function (day)==> {if(this day is a weekend or not)}
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Saturday"] = 0] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
})(WeekDays || (WeekDays = {}));
function isWeekend(day) {
    const weekday = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ];
    return `${weekday[day]} is ${day === WeekDays.Friday || day === WeekDays.Saturday
        ? "Weekend"
        : "Not Weekend"}`;
}
console.log(isWeekend(WeekDays.Friday));
console.log(isWeekend(WeekDays.Saturday));
console.log(isWeekend(WeekDays.Sunday));
