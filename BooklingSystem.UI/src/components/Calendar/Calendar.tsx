import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Calendarr: React.FC = () => {
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

  const [selectedDate, setSelectedDate] = useState();

  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = (value: any) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value: any) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value: any) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  return (
    <div>
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};

export default Calendarr;
