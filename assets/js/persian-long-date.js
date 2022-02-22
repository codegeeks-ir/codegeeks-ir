
const dayNames = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

function getPersianDate(georgianString) {
  let georgianDate = new Date(georgianString);
  let persianString = georgianDate.toLocaleDateString('fa-IR');

  let weekDay = dayNames[georgianDate.getDay()];
  let day = persianString.split('/')[2];
  let month = getPersianMonth(persianString);
  let year = persianString.split('/')[0];
  return weekDay + " " + day + " " + month + " " + year;
}

function getPersianMonth(persianString) {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    const latinNumners = "0123456789";
    let persianDigitMonth = persianString.split('/')[1];
    let monthIndex = "";
    persianDigitMonth.split('').forEach(digit => {
      let digitIndex = persianNumbers.indexOf(digit);
      monthIndex += latinNumners[digitIndex];
    });
    monthIndex -= 1;
    return monthNames[monthIndex];
}