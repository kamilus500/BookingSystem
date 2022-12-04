import React, { useRef } from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

const Size: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectHandler = () => {
    if (selectRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_SIZE,
        payload: selectRef.current.value,
      });
    }
  };

  return (
    <Wrapper>
      <h3>Wybierz rozmiar namiotu!</h3>

      <select
        name="size"
        onChange={selectHandler}
        ref={selectRef}
        defaultValue={orderState.size}
      >
        <option value="">--Wybierz rozmiar--</option>
        <option value="small">Mały</option>
        <option value="medium">Średni</option>
        <option value="giga">Giga</option>
      </select>

      <div className="flex gap-4">
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

export default Size;
