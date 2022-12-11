import React, { useRef } from "react";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import { OrderState } from "../../models/OrderState";
import { OrderActions } from "../../models/OrderAtions";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";

const UserInput: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();

  const firstNameHandler = () => {
    if (firstNameRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_USER,
        payload: {
          id: "firstName",
          value: firstNameRef.current.value,
        },
      });
    }
  };
  const lastNameHandler = () => {
    if (lastNameRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_USER,
        payload: {
          id: "lastName",
          value: lastNameRef.current.value,
        },
      });
    }
  };

  const { address, user } = orderState;
  const { firstName, lastName } = user;
  const { street, buildingNumber, city, zipCode } = address;

  const disableButton =
    firstName && lastName && street && buildingNumber && city && zipCode;

  return (
    <>
      <label>
        {t("Name")}: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={firstNameRef}
          onChange={firstNameHandler}
          value={orderState.user.firstName}
        />
      </label>

      <label>
        {t("LastName")}: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={lastNameRef}
          onChange={lastNameHandler}
          value={orderState.user.lastName}
        />
      </label>

      <div className="flex gap-4">
        <Button
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          {t("Back")}
        </Button>
        <Button
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_INC })
          }
          accent
          disabled={!disableButton}
        >
          {t("Next")}
        </Button>
      </div>
    </>
  );
};

export default UserInput;
