import React, { useRef } from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

const Addons: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const chairsRef = useRef<HTMLInputElement>(null);
  const tablesRef = useRef<HTMLInputElement>(null);

  const chairHandler = () => {
    if (chairsRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_CHAIRS,
        payload: chairsRef.current.valueAsNumber,
      });
    }
  };
  const tableHandler = () => {
    if (tablesRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_TABLES,
        payload: tablesRef.current.valueAsNumber,
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
    <Wrapper>
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
          className="dark:text-black"
          type="number"
          placeholder="Podaj liczbę..."
          min={0}
          onChange={chairHandler}
          ref={chairsRef}
          value={orderState.chairs}
        />
      </label>

      <label>
        Liczba stołów:
        <input
          className="dark:text-black"
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
          disabled={!orderState.size}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          Wróć
        </Button>
        <Button
          disabled={!orderState.size}
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

export default Addons;
