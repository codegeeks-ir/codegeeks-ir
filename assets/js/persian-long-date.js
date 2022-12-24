
const dayNames = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

function getPersianDate(georgianString) {
  const georgianDate = new Date(georgianString);
  const persianString = georgianDate.toLocaleDateString('fa-IR');
  
  const weekDay = dayNames[georgianDate.getDay()];
  const day = persianString.split('/')[2];
  const month = getPersianMonth(persianString);
  const year = persianString.split('/')[0];
  return weekDay + " " + day + " " + month + " " + year;
}

function getPersianMonth(persianString) {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    const latinNumners = "0123456789";
    const persianDigitMonth = persianString.split('/')[1];
    let monthIndex = "";
    persianDigitMonth.split('').forEach(digit => {
      let digitIndex = persianNumbers.indexOf(digit);
      monthIndex += latinNumners[digitIndex];
    });
    monthIndex -= 1;
    return monthNames[monthIndex];
}

function createEducationYears(elementClassName) {
  const dateElements = document.querySelectorAll(elementClassName);
  dateElements.forEach(element => {
    const currentYearDate = new Date(element.innerHTML);
    const nextYearDate = new Date(currentYearDate.getFullYear() + 1, currentYearDate.getMonth(), currentYearDate.getDay());
    const currentYearPersianString = getPersianDate(currentYearDate.toDateString()).split(" ")[3];
    const nextYearPersianString = getPersianDate(nextYearDate.toDateString()).split(" ")[3];
    element.innerHTML = "سال" + " " + nextYearPersianString + " - " + currentYearPersianString;
    element.style.visibility = "visible";
  });
}

function convertAllDatesToPersian(elementClassName) {
  const dateElements = document.querySelectorAll(elementClassName);
  dateElements.forEach(element => {
    element.innerHTML = getPersianDate(element.innerHTML);
    element.style.visibility = "visible";
  });
}