import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";
import { OrderState } from "../../models/OrderState";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
<<<<<<< HEAD
import { OrderActions } from "../../models/OrderAtions";
const disableDates = new Date('August 19, 2022 23:15:30');
const date1=disableDates.getDate();
const disableDates2 = new Date('August 18, 2022 23:15:30');
const date2=disableDates2.getDate();
const dateArray=[date1,date2]//Tablica dat będzie pobierana od kamila
=======
import { OrderActions } from "../../models/OrderActions";
>>>>>>> 2730c88acf0c3e25dcef76dcfa9442179bad94a4

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
        tileDisabled={({date})=>dateArray.includes(date.getDate())}
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
