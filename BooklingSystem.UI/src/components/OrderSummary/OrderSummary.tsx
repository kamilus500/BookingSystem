import React, { useEffect, useState } from "react";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import {
  LocationState,
  OrderAction,
} from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderAtions";
import { OrderState } from "../../models/OrderState";
import { useHistory, useLocation } from "react-router";
import { useCookies } from "react-cookie";

const OrderSummary: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const [distanceCost, setDistanceCost] = useState(0);

  const history = useHistory();

  const {
    speaker,
    chairs,
    tables,
    user,
    address,
    date,
    bbq,
    size,
    totalValue,
  } = orderState;
  const { t } = useTranslation();

  useEffect(() => {
    setOrderStateReducer({ type: OrderActions.SET_PRICE });

    fetch(
      `https://app.zipcodebase.com/api/v1/distance?apikey=048560a0-7986-11ed-8c67-e7b60bbc3d71&code=42-214&compare=${address.zipCode}%2C10007&country=pl`
    )
      .then((response) => response.json())
      .then((data) => setDistanceCost(data.results[address.zipCode] * 2 * 3));

    return () =>
      setOrderStateReducer({ type: OrderActions.SET_PRICE, payload: 0 });
  }, []);

  const { state } = useLocation<LocationState>();

  const [cookie] = useCookies(["loginData"]);

  const onCLickHandler = () => {
    history.push("/");
  };

  const orderHandler = async () => {
    const orderObj: {
      address: string;
      tentId: number;
      cost: number;
      dateTime: Date | null;
      userId?: number;
    } = {
      address: `${address.street} ${address.buildingNumber} ${address.city} ${address.zipCode}`,
      tentId: state.tentId,
      cost: totalValue + distanceCost,
      dateTime: date,
    };

    if (cookie.loginData) {
      orderObj.userId = cookie.loginData.userId;
    }

    setDisable(true);
    try {
      const response = await fetch(
        "https://booking-tent-api.azurewebsites.net/api/Order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderObj),
        }
      );

      if (response.ok) {
        setMessage("Dziękujemy za zamówienie");
      }
    } catch (e) {}
  };

  return (
    <Wrapper>
      {!message && (
        <>
          <div>
            <div>
              <p>
                {t("TentSize")}: {size} - {state.price} PLN
              </p>
            </div>

            <div>
              <p>
                {t("Price")}: {totalValue} PLN
              </p>
            </div>

            <div>
              <p>
                {t("Loudspeaker")}: {speaker ? "✔︎ - 100 PLN" : "✕"}
              </p>
            </div>

            <div>
              <p>Grill: {bbq ? "✔︎ - 60 PLN" : "✕"}</p>
            </div>

            <div>
              <p>
                {t("NumberOfChairs")}: x{chairs}
                {orderState.chairs ? ` - ${orderState.chairs * 10} PLN` : null}
              </p>
            </div>

            <div>
              <p>
                {t("NumberOfTables")}: x{tables}
                {orderState.tables ? ` - ${orderState.tables * 15} PLN` : null}
              </p>
            </div>

            <div>
              <p>
                {t("ReservationDate")}: {date?.toLocaleDateString()}
              </p>
            </div>

            <div>
              <p>
                {t("CustomerData")}: {user.firstName} {user.lastName}
              </p>
            </div>

            <div>
              <p>
                {t("CustomerAddress")}: {address.street}
                {address.buildingNumber} {address.city} {address.zipCode}
              </p>
            </div>
          </div>
          <div>
            <p>Koszt dostawy: {distanceCost} PLN</p>
          </div>
          <div>
            <p>Łączny koszt: {(distanceCost + totalValue).toFixed(2)} PLN</p>
          </div>
          <div className="w-1/4 flex gap-4">
            <Button
              clickHandler={() =>
                setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
              }
            >
              {t("Back")}
            </Button>
            <Button disabled={disable} clickHandler={orderHandler} accent>
              {t("Order")}
            </Button>
          </div>
        </>
      )}
      {message && (
        <>
          <p>{t("OrderSubmit")}</p>
          <div>
            <Button accent clickHandler={onCLickHandler}>
              {t("BackToHome")}
            </Button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default OrderSummary;
