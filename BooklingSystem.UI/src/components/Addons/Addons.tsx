import React, { useRef } from "react";
import Button from "../Ui/Button";
import { OrderState } from "../../models/OrderState";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderActions";

const Addons: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const chairsRef = useRef<HTMLInputElement>(null);
  const tablesRef = useRef<HTMLInputElement>(null);

  const chairHandler = () => {
    if (chairsRef.current) {
      let charisNumber = Number(chairsRef.current.value);

      setOrderStateReducer({
        type: OrderActions.SET_CHAIRS,
        payload:
          charisNumber < 0
            ? 0
            : charisNumber > 30 && orderState.tentId === 1
            ? 30
            : charisNumber > 50 && orderState.tentId === 2
            ? 50
            : charisNumber > 80 && orderState.tentId === 3
            ? 80
            : charisNumber,
      });
    }
  };
  const tableHandler = () => {
    if (tablesRef.current) {
      let tableNumber = Number(tablesRef.current.value);

      setOrderStateReducer({
        type: OrderActions.SET_TABLES,
        payload:
          tableNumber < 0
            ? 0
            : tableNumber > 3 && orderState.tentId === 1
            ? 3
            : tableNumber > 5 && orderState.tentId === 2
            ? 5
            : tableNumber > 8 && orderState.tentId === 3
            ? 8
            : tableNumber,
      });
    }
  };
  const bbqHandler = () => {
    setOrderStateReducer({
      type: OrderActions.SET_BBQ,
      payload: !orderState.bbq,
    });
  };
  const speakerHandler = () => {
    setOrderStateReducer({
      type: OrderActions.SET_SPEAKER,
      payload: !orderState.speaker,
    });
  };

  return (
    <>
      <label>
        Dodatkowy grill
        <input
          className="dark:text-black"
          type="checkbox"
          name="bbq"
          onChange={bbqHandler}
          defaultChecked={orderState.bbq}
        />
      </label>

      <label>
        Zestaw muzyczny - głośniki oraz mikrofon
        <input
          className="dark:text-black"
          type="checkbox"
          name="speaker"
          onChange={speakerHandler}
          defaultChecked={orderState.speaker}
        />
      </label>

      <label>
        Liczba krzeseł:
        <input
          className="dark:text-black w-32"
          type="number"
          placeholder="Podaj liczbę..."
          min={0}
          max={orderState.tentId === 1 ? 30 : orderState.tentId === 2 ? 50 : 80}
          onChange={chairHandler}
          ref={chairsRef}
          value={orderState.chairs}
        />
      </label>

      <label>
        Liczba stołów:
        <input
          className="dark:text-black w-32"
          type="number"
          placeholder="Podaj liczbę..."
          min={0}
          onChange={tableHandler}
          ref={tablesRef}
          value={orderState.tables}
        />
      </label>

      <div className="flex gap-4">
        <Button
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_INC })
          }
          accent
        >
          Dalej
        </Button>
      </div>
    </>
  );
};

export default Addons;
