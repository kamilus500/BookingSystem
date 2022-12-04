import React, { useRef } from "react";
import {
  OrderAction,
  OrderActions,
  OrderState,
} from "../../pages/ReservationPage/ReservationPage";
import Wrapper from "../Ui/Wrapper";
import Button from "../Ui/Button";

const AddressInput: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const streetRef = useRef<HTMLInputElement>(null);
  const buildingNumberRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const streetHandler = () => {
    if (streetRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_ADDRESS,
        payload: {
          id: "street",
          value: streetRef.current.value,
        },
      });
    }
  };
  const buildingNumberHandler = () => {
    if (buildingNumberRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_ADDRESS,
        payload: {
          id: "buildingNumber",
          value: buildingNumberRef.current.value,
        },
      });
    }
  };
  const zipCodeHandler = () => {
    if (zipCodeRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_ADDRESS,
        payload: {
          id: "zipCode",
          value: zipCodeRef.current.value,
        },
      });
    }
  };
  const cityHandler = () => {
    if (cityRef.current) {
      setOrderStateReducer({
        type: OrderActions.SET_ADDRESS,
        payload: {
          id: "city",
          value: cityRef.current.value,
        },
      });
    }
  };

  const addressValid = !(
    orderState.address.zipCode &&
    orderState.address.city &&
    orderState.address.street &&
    orderState.address.buildingNumber
  );

  return (
    <Wrapper>
      <div>
        <label>
          Ulica: <br />
          <input
            type="text"
            required
            ref={streetRef}
            onChange={streetHandler}
            value={orderState.address.street}
          />
        </label>

        <br />

        <label>
          Numer mieszkania/domu: <br />
          <input
            type="text"
            required
            ref={buildingNumberRef}
            onChange={buildingNumberHandler}
            value={orderState.address.buildingNumber}
          />
        </label>

        <br />

        <label>
          Miejscowość: <br />
          <input
            type="text"
            required
            ref={cityRef}
            onChange={cityHandler}
            value={orderState.address.city}
          />
        </label>

        <br />

        <label>
          Kod pocztowy: <br />
          <input
            type="text"
            required
            ref={zipCodeRef}
            onChange={zipCodeHandler}
            value={orderState.address.zipCode}
          />
        </label>
      </div>

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
          disabled={addressValid}
        >
          Dalej
        </Button>
      </div>
    </Wrapper>
  );
};

export default AddressInput;
