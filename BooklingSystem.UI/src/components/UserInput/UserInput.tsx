import React, { useRef } from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

const UserInput: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

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

  const userInputValid = !(
    orderState.user.firstName && orderState.user.lastName
  );

  return (
    <Wrapper>
      <label>
        Imię: <br />
        <input
          type="text"
          required
          ref={firstNameRef}
          onChange={firstNameHandler}
          value={orderState.user.firstName}
        />
      </label>
      <br />
      <label>
        Nazwisko: <br />
        <input
          type="text"
          required
          ref={lastNameRef}
          onChange={lastNameHandler}
          value={orderState.user.lastName}
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
          clickHandler={() =>
            setOrderStateReducer({ type: OrderActions.SET_STEP_INC })
          }
          accent
          disabled={userInputValid}
        >
          Dalej
        </Button>
      </div>
    </Wrapper>
  );
};

export default UserInput;
