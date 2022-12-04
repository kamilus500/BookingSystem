import React from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

const OrderSummary: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const { speaker, chairs, tables, user, address, date, bbq, size } =
    orderState;

  const orderHandler = () => {
    alert("Twoje zamówienie zostało złożone");
  };

  return (
    <Wrapper>
      <div>
        <div>
          <p>Rozmiar namiotu: {size}</p>
        </div>

        <div>
          <p>Głośnik: {speaker ? "✔︎" : "✕"}</p>
        </div>

        <div>
          <p>Grill: {bbq ? "✔︎" : "✕"}</p>
        </div>

        <div>
          <p>Ilość krzeseł: {chairs}</p>
        </div>

        <div>
          <p>Ilość stołów: {tables}</p>
        </div>

        <div>
          <p>Data rezerwacji: {date?.toLocaleDateString()}</p>
        </div>

        <div>
          <p>
            Dane zamawiającego: {user.firstName} {user.lastName}
          </p>
        </div>

        <div>
          <p>
            Adres zamawiającego: {address.street} {address.buildingNumber}{" "}
            {address.city} {address.zipCode}
          </p>
        </div>
      </div>

      <Button
        disabled={!orderState.size}
        clickHandler={() =>
          setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
        }
      >
        Wróć
      </Button>
      <Button disabled={!orderState.size} clickHandler={orderHandler}>
        Wróć
      </Button>
    </Wrapper>
  );
};

export default OrderSummary;
