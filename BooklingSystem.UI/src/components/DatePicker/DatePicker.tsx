import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Calendarr: React.FC<{
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  date: Date;
}> = ({ setDate, setStep, date }) => {
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedDate, setSelectedDate] = useState<Date>(date);

  const [calendarText, setCalendarText] = useState(`Data nie jest wybrana!`);

  // Function to update selected date and calander text
  const handleDateChange = (value: Date) => {
    setSelectedDate(value);
    setCalendarText(`Wybrana data to ${value.toLocaleDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value: Date) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Wybrano rok!`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value: Date) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Wybrano miesiąc!`);
  };

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate, setDate]);

  return (
    <div>
      <h2 className="calander-details">
        {selectedDate ? selectedDate.toLocaleDateString() : calendarText}
      </h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />

      <div className="flex gap-4">
        <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state - 1)}
        >
          Wróć
        </button>
        <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state + 1)}
          disabled={selectedDate ? false : true}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Calendarr;
