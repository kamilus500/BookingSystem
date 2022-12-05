import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

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
    <Wrapper>
      <h2 className="calander-details">
        {selectedDate ? selectedDate.toLocaleDateString() : calendarText}
      </h2>
      <Calendar
        className="dark:text-black"
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />

      <div className="flex gap-4">
        <Button
          disabled={!orderState.size}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          Wróć
        </Button>
        <Button
          disabled={!selectedDate}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_INC })
          }
          accent
        >
          Dalej
        </Button>
      </div>
    </Wrapper>
  );
};

export default Calendarr;
