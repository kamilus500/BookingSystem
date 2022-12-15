import React, { memo, useRef } from "react";
import { OrderState } from "../../models/OrderState";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderActions";

const Size: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectHandler = () => {
    let price;

    if (selectRef.current) {
      price=selectRef.current.value==="small"?489:selectRef.current.value==="medium"?589:889;
      console.log(selectRef.current)
      setOrderStateReducer({
        type: OrderActions.SET_SIZE,
        payload: selectRef.current.value,
      });
      console.log(price)
      setOrderStateReducer({
        type: OrderActions.SET_PRICE2,
        payload: selectRef.current.value==="small"?489:selectRef.current.value==="medium"?589:889,
      });

      setOrderStateReducer({
        type: OrderActions.SET_TENTID,
        payload: selectRef.current.value==="small"?1:selectRef.current.value==="medium"?2:3,
      });
    }
  };
  return (
    <>
      <h3>Wybierz rozmiar namiotu!</h3>

      <select
        name="size"
        onChange={selectHandler}
        ref={selectRef}
        defaultValue={orderState.size}
        className="dark:text-black"
      >
        <option disabled={selectRef.current?.value!==""} value="">--Wybierz rozmiar--</option>
        <option data-price={489} value="small">Mały</option>
        <option data-price={589} value="medium">Średni</option>
        <option data-price={889} value="giga">Giga</option>
      </select>
    </>
  );
};

export default memo(Size);
