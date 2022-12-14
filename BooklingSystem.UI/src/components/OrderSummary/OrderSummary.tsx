import React, { useEffect, useState } from "react";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import {
  LocationState,
  OrderAction,
} from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderActions";
import { OrderState } from "../../models/OrderState";
import { useHistory, useLocation } from "react-router";
import { useCookies } from "react-cookie";

const OrderSummary: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const [distanceCost, setDistanceCost] = useState("0");
  const [buttonDisable, setButtonDisable] = useState(false);

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
      .then((data) => {
        const cost = (data.results[address.zipCode] * 2 * 3).toFixed(2);
        isNaN(Number(cost)) ? setButtonDisable(true) : setButtonDisable(false);
        setDistanceCost(cost);
      });

    return () =>
      setOrderStateReducer({ type: OrderActions.SET_PRICE, payload: 0 });
  }, [setOrderStateReducer, address.zipCode]);

  // const { state } = useLocation<LocationState>();

  const [cookie] = useCookies(["loginData"]);

  const onCLickHandler = () => {
    history.push("/");
  };

  const orderHandler = async () => {
    const orderObj: {
      adress: string;
      tentId: number;
      cost: number;
      dateTime: Date | null;
      userId?: number;
      email?: string;
    } = {
      adress: `${address.street} ${address.buildingNumber} ${address.city} ${address.zipCode}`,
      tentId:
        orderState.size === "giga" ? 3 : orderState.size === "medium" ? 2 : 1,
      cost: Number(totalValue + Number(distanceCost)),
      dateTime: date,
      email: orderState.user.email,
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
        setMessage("Dzi??kujemy za zam??wienie");
      }
    } catch (e) {}
  };

  return (
    <>
      {!message && (
        <>
          <div>
            <div>
              <p>
                {t("TentSize")}: {size} - {orderState.price} PLN
              </p>
            </div>

            <div>
              <p>
                {t("Price")}: {totalValue} PLN
              </p>
            </div>

            <div>
              <p>
                {t("Loudspeaker")}: {speaker ? "?????? - 100 PLN" : "???"}
              </p>
            </div>

            <div>
              <p>Grill: {bbq ? "?????? - 60 PLN" : "???"}</p>
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
          {buttonDisable && (
            <div>
              <p className="text-red-900 font-bold text-4xl">
                Nieprawid??owy kod pocztowy!
              </p>
            </div>
          )}
          {!buttonDisable && (
            <>
              <div>
                <p>Koszt dostawy: {Number(distanceCost).toFixed(2)} PLN</p>
              </div>
              <div>
                <p>
                  ????czny koszt: {(Number(distanceCost) + totalValue).toFixed(2)}{" "}
                  PLN
                </p>
              </div>
            </>
          )}
          <div className="w-1/4 flex gap-4">
            <Button
              accent
              clickHandler={() =>
                setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
              }
            >
              {t("Back")}
            </Button>
            <Button
              disabled={disable || buttonDisable}
              clickHandler={orderHandler}
              accent
            >
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
    </>
  );
};

export default OrderSummary;
