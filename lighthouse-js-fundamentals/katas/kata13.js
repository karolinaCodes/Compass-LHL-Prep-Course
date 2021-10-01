// Talking Calendar

const talkingCalendar = function (date) {
  //converts date string to date object
  const dateObject = new Date(date);
  //gets full month name of date object- not sep but "September"
  const month = dateObject.toLocaleString("default", { month: "long" });
  //gets date (number), converts to string so can add ordinal suffix in next steps
  let day = dateObject.getDate().toString();
  //add ordinal suffix to end of day. "st" if end in 1 but not for 11, "nd" if ends with 2 but not 12, "rd" if ends with 3 but not 13, and the rest end with "th"
  if (day[day.length - 1] === "1" && day !== "11") {
    day += "st";
  } else if (day[day.length - 1] === "2" && day !== "12") {
    day += "nd";
  } else if (day[day.length - 1] === "3" && day !== "13") {
    day += "rd";
  } else {
    day += "th";
  }
  //gets full year
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
