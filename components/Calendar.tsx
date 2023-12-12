import PreviousIcon from "public/icones/back.svg";
import NextIcon from "public/icones/back-folder.svg";
import {
  getFullMonth,
  dayNamesInPersianOrder,
  shiftGeorgianDate,
  isSameDate,
  getPersianShortDate,
} from "lib/persian-long-date";
import { useState } from "react";

const Day = ({
  persianDay,
  isCurrentDay,
  selectedDate,
  setSelectedDate,
  date,
}) => (
  <>
    {persianDay != undefined ? (
      <div
        className="flex w-auto flex-row items-center justify-center"
        onClick={() => setSelectedDate(date)}
      >
        <span
          className={
            `w-10 rounded-md px-2 py-1 ${
              isCurrentDay ? "current-day" : "btn"
            } ` + `${isSameDate(selectedDate, date) ? "selected-day" : ""}`
          }
        >
          {persianDay}
        </span>
      </div>
    ) : (
      <div></div>
    )}
  </>
);

const Calendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayOffset, setDayOffset] = useState(0);
  const [monthOffset, setMonthOffset] = useState(0);
  const [yearOffset, setYearOffset] = useState(0);
  return (
    <div className="calendar">
      <div className="calendar-day-names">
        {dayNamesInPersianOrder.map((dayName) => (
          <span className="text-center" key={dayName}>
            {dayName}
          </span>
        ))}
      </div>
      <div className="calendar-day-list">
        {getFullMonth(todayDate, dayOffset, monthOffset, yearOffset).map(
          (day, index) => (
            <Day
              persianDay={day.persianDay}
              isCurrentDay={day.isCurrentDay}
              date={day.georgianDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              key={index}
            />
          ),
        )}
      </div>
      <div className="calendar-header">
        <button className="btn" onClick={() => setMonthOffset(monthOffset - 1)}>
          <PreviousIcon className="w-6 fill-slate-700" />
        </button>
        <p className="p-1 text-center text-lg text-slate-500">
          {getPersianShortDate(
            shiftGeorgianDate(
              selectedDate,
              dayOffset,
              monthOffset,
              yearOffset,
              1,
            ),
          )}
        </p>
        <button className="btn" onClick={() => setMonthOffset(monthOffset + 1)}>
          <NextIcon className="w-6 fill-slate-700" />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
