import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import Button from "../Ui/Button";
import { OrderState } from "../../models/OrderState";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderActions";
import { useTranslation } from "react-i18next";
const disableDates = new Date("August 19, 2022");
const date1 = disableDates.getDate();
const disableDates2 = new Date("August 18, 2022");
const date2 = disableDates2.getDate();
const dateArray = [disableDates.toString(), disableDates2.toString()]; //Tablica dat będzie pobierana od kamila

const Calendarr: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
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
  const [t] = useTranslation();

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    orderState.date
  );

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
    setOrderStateReducer({
      type: OrderActions.SET_DATE,
      payload: selectedDate,
    });
  }, [selectedDate, setOrderStateReducer]);

  return (
    <>
      <h2 className="calander-details">
        {selectedDate ? selectedDate.toLocaleDateString() : calendarText}
      </h2>
      <Calendar
        className="dark:text-black"
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
        tileDisabled={({ date }) =>
          dateArray.includes(date.toString()) || date <= new Date()
        }
      />

      <div className="flex gap-4">
        <Button
          accent
          disabled={!orderState.size}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          {t("Back")}
        </Button>
        <Button
          accent
          disabled={!selectedDate}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_INC })
          }
        >
          {t("Next")}
        </Button>
      </div>
    </>
  );
};

export default Calendarr;
