import React, { useRef, useState } from "react";
import { OrderState } from "../../models/OrderState";
import { OrderAction } from "../../pages/ReservationPage/ReservationPage";
import { OrderActions } from "../../models/OrderActions";

const AddressInput: React.FC<{
  orderState: OrderState;
  setOrderStateReducer: React.Dispatch<OrderAction>;
}> = ({ orderState, setOrderStateReducer }) => {
  const streetRef = useRef<HTMLInputElement>(null);
  const buildingNumberRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const checkZipExistance = async (zipCode: string): Promise<any> => {
    const resp = await fetch("http://kodpocztowy.intami.pl/api/" + zipCode, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await resp.json();
  };

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
  const zipCodeHandler = async () => {
    if (zipCodeRef.current) {
      if (/^[\d]{2}-[\d]{3}$/g.test(zipCodeRef.current.value)) {
        const zip = await checkZipExistance(zipCodeRef.current.value);

        if (!zip.length) return;
        setOrderStateReducer({
          type: OrderActions.SET_ADDRESS,
          payload: {
            id: "zipCode",
            value: zipCodeRef.current.value,
          },
        });
      }
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

  return (
    <>
      <label>
        Ulica: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={streetRef}
          onChange={streetHandler}
          value={orderState.address.street}
        />
      </label>

      <label>
        Numer mieszkania/domu: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={buildingNumberRef}
          onChange={buildingNumberHandler}
          value={orderState.address.buildingNumber}
        />
      </label>

      <label>
        Miejscowość: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={cityRef}
          onChange={cityHandler}
          value={orderState.address.city}
        />
      </label>

      <label>
        Kod pocztowy: <br />
        <input
          className="dark:text-black"
          type="text"
          required
          ref={zipCodeRef}
          onChange={zipCodeHandler}
          value={orderState.address.zipCode}
          pattern="[0-9]*"
        />
      </label>
    </>
  );
};

export default AddressInput;
