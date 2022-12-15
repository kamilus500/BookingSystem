import React, {useRef, useState} from "react";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import { OrderState } from "../../models/OrderState";
import { OrderActions } from "../../models/OrderActions";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
import { useCookies } from "react-cookie";

const UserInput: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();
  const [cookie] = useCookies(["loginData"]);

  const [zipExists, setZipExists] = useState(false);

  const checkZipExistance=(zipCode: string)=> {
    fetch("http://kodpocztowy.intami.pl/api/" + zipCode, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setZipExists(res.ok);
    });
  }

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
  const emailHandler = () => {
    if (emailRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_USER,
        payload: {
          id: "email",
          value: emailRef.current.value,
        },
      });
    }
  };

  const { address, user } = orderState;
  const { firstName, lastName,email } = user;
  const { street, buildingNumber, city, zipCode } = address;
  const disableButton =
    /^[A-Za-z]+$/g.test(firstName) &&
      /^[A-Za-z]+$/g.test(lastName) &&
    street &&
      buildingNumber &&
      /^[A-Za-z]+$/g.test(city) &&
    /^[\d]{2}-[\d]{3}$/g.test(zipCode)&&
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g.test(email);


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

      {!cookie.loginData && (
        <label>
          Email: <br />
          <input
            className="dark:text-black"
            type="email"
            required
            ref={emailRef}
            onChange={emailHandler}
            value={orderState.user.email}
          />
        </label>
      )}

      <div className="flex gap-4">
        <Button
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_DEC })
          }
        >
          {t("Back")}
        </Button>
        <Button
          clickHandler={() => {
            checkZipExistance(zipCode)
            setOrderStateReducer({type: OrderActions.SET_STEP_INC})

          }
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
