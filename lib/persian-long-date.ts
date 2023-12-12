const dayNames = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const dayNamesInPersianOrder = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const monthNames = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const digitsToLatin = (persianNumber) =>
  persianNumber
    .split("")
    .map((digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .join("");

const toNumber = (persianNumber) => Number(digitsToLatin(persianNumber));

const getPersianYear = (date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[0];

const getPersianMonth = (date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[1];

const getPersianDay = (date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[2];

const shiftGeorgianDate = (
  date,
  dayOffset = 0,
  monthOffset = 0,
  yearOffset = 0,
  multiplier = 1
) =>
  new Date(
    date.getFullYear() + yearOffset * multiplier,
    date.getMonth() + monthOffset * multiplier,
    date.getDate() + dayOffset * multiplier
  );

const firstDayInMonth = (date) =>
  shiftGeorgianDate(date, toNumber(getPersianDay(date)) - 1, 0, 0, -1);

const isSameDate = (firstDate, secondDate) =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

const getPersianShortDate = (date) =>
  monthNames[toNumber(getPersianMonth(date)) - 1] + " " + getPersianYear(date);

const getPersianLongDate = (georgianString) => {
  const georgianDate = new Date(georgianString);
  const persianString = georgianDate.toLocaleDateString("fa-IR");
  const weekDay = dayNames[georgianDate.getDay()];
  const day = persianString.split("/")[2];
  const month = getPersianMonthName(persianString);
  const year = persianString.split("/")[0];
  return weekDay + " " + day + " " + month + " " + year;
};

const getPersianMonthName = (persianString) => {
  const persianStringNumbers = "۰۱۲۳۴۵۶۷۸۹";
  const persianDigitMonth = persianString.split("/")[1];
  let monthNumber = persianDigitMonth
    .split("")
    .map((digit) => persianStringNumbers.indexOf(digit))
    .join("");
  monthNumber = Number(monthNumber) - 1;
  return monthNames[monthNumber];
};

const getPersianEducationYear = (dateString) => {
  const currentYearDate = new Date(dateString);
  const nextYearDate = shiftGeorgianDate(currentYearDate, 0, 0, 1);
  const currentYearPersianString = getPersianLongDate(
    currentYearDate.toDateString()
  ).split(" ")[3];
  const nextYearPersianString = getPersianLongDate(
    nextYearDate.toDateString()
  ).split(" ")[3];
  return "سال" + " " + nextYearPersianString + " - " + currentYearPersianString;
};

const getFullMonth = (todayDate, dayOffset, monthOffset, yearOffset) => {
  const initialDate = shiftGeorgianDate(
    todayDate,
    dayOffset,
    monthOffset,
    yearOffset
  );
  const firstDay = firstDayInMonth(initialDate);
  const monthArray = [];
  for (let index = 0; index < 35; index++) {
    const georgianDate = shiftGeorgianDate(firstDay, index);
    const persianLongDate = getPersianLongDate(georgianDate.toDateString());
    const persianDay = getPersianDay(georgianDate);
    const persianMonth = getPersianMonth(georgianDate);
    const persianYear = getPersianYear(georgianDate);
    const isCurrentDay = isSameDate(todayDate, georgianDate);
    if (getPersianMonth(initialDate) === getPersianMonth(georgianDate)) {
      monthArray.push({
        georgianDate,
        persianLongDate,
        persianDay,
        persianMonth,
        persianYear,
        isCurrentDay,
      });
    }
  }
  const firstDayIndexInWeek = firstDay.getDay();
  for (let index = 0; index <= firstDayIndexInWeek; index++)
    if (monthArray != undefined && monthArray.length > 0)
      monthArray.unshift({});
  return monthArray;
};

export {
  getPersianShortDate,
  getPersianLongDate,
  getPersianMonthName,
  getPersianEducationYear,
  dayNamesInPersianOrder,
  monthNames,
  getPersianDay,
  getPersianMonth,
  getPersianYear,
  shiftGeorgianDate,
  firstDayInMonth,
  getFullMonth,
  isSameDate,
};
