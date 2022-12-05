import React from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";
import {useTranslation} from "react-i18next";
const OrderSummary: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const { speaker, chairs, tables, user, address, date, bbq, size } =
    orderState;
const {t}=useTranslation();
  const orderHandler = () => {
    alert("Twoje zamówienie zostało złożone");
  };

  return (
    <Wrapper>
      <div>
        <div>
          <p>{t("TentSize")}: {size}</p>
        </div>

        <div>
          <p>{t("LoudSpeaker")}: {speaker ? "✔︎" : "✕"}</p>
        </div>

        <div>
          <p>Grill: {bbq ? "✔︎" : "✕"}</p>
        </div>

        <div>
          <p>{t("NumberOfChairs")}: {chairs}</p>
        </div>

        <div>
          <p>{t("NumberOfTables")}: {tables}</p>
        </div>

        <div>
          <p>{t("ReservationDate")}: {date?.toLocaleDateString()}</p>
        </div>

        <div>
          <p>
            {t("CustomerData")}: {user.firstName} {user.lastName}
          </p>
        </div>

        <div>
          <p>
            {t("CustomerAddress")}: {address.street} {address.buildingNumber}{" "}
            {address.city} {address.zipCode}
          </p>
        </div>
      </div>
      <div className="w-1/4 flex gap-4">
        <Button
          disabled={!orderState.size}
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          {t("Back")}
        </Button>
        <Button disabled={!orderState.size} clickHandler={orderHandler} accent>
          {t("Order")}
        </Button>
      </div>
    </Wrapper>
  );
};

export default OrderSummary;
