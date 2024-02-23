const dayNames: string[] = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const dayNamesInPersianOrder: string[] = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const monthNames: string[] = [
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

const digitsToLatin = (persianNumber: string) =>
  persianNumber
    .split("")
    .map((digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .join("");

const toNumber = (persianNumber: string) =>
  Number(digitsToLatin(persianNumber));

const getPersianYear = (date: Date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[0];

const getPersianMonth = (date: Date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[1];

const getPersianDay = (date: Date) =>
  date.toLocaleDateString("fa-IR").split(",")[0].split("/")[2];

const shiftGeorgianDate = (
  date: Date,
  dayOffset: number = 0,
  monthOffset: number = 0,
  yearOffset: number = 0,
  multiplier: number = 1,
) =>
  new Date(
    date.getFullYear() + yearOffset * multiplier,
    date.getMonth() + monthOffset * multiplier,
    date.getDate() + dayOffset * multiplier,
  );

const firstDayInMonth = (date: Date) =>
  shiftGeorgianDate(date, toNumber(getPersianDay(date)) - 1, 0, 0, -1);

const isSameDate = (firstDate: Date, secondDate: Date) =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

const getPersianShortDate = (date: Date) =>
  monthNames[toNumber(getPersianMonth(date)) - 1] + " " + getPersianYear(date);

const getPersianLongDate = (date: Date) => {
  const persianString = date.toLocaleDateString("fa-IR");
  const weekDay = dayNames[date.getDay()];
  const day = persianString.split("/")[2];
  const month = getPersianMonthName(persianString);
  const year = persianString.split("/")[0];
  return weekDay + " " + day + " " + month + " " + year;
};

const getPersianMonthName = (persianString: string) => {
  const persianStringNumbers = "۰۱۲۳۴۵۶۷۸۹";
  const persianDigitMonth = persianString.split("/")[1];
  let monthNumber: number =
    Number(
      persianDigitMonth
        .split("")
        .map((digit) => persianStringNumbers.indexOf(digit))
        .join(""),
    ) - 1;
  return monthNames[monthNumber];
};

const getPersianEducationYear = (dateString: string) => {
  const currentYearDate = new Date(dateString);
  const nextYearDate = shiftGeorgianDate(currentYearDate, 0, 0, 1);
  const currentYearPersianString =
    getPersianLongDate(currentYearDate).split(" ")[3];
  const nextYearPersianString = getPersianLongDate(nextYearDate).split(" ")[3];
  return "سال" + " " + nextYearPersianString + " - " + currentYearPersianString;
};

const getFullMonth = (
  todayDate: Date,
  dayOffset: number,
  monthOffset: number,
  yearOffset: number,
) => {
  const initialDate = shiftGeorgianDate(
    todayDate,
    dayOffset,
    monthOffset,
    yearOffset,
  );
  const firstDay = firstDayInMonth(initialDate);
  const monthArray = [];
  for (let index = 0; index < 35; index++) {
    const georgianDate = shiftGeorgianDate(firstDay, index);
    const persianLongDate = getPersianLongDate(georgianDate);
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
