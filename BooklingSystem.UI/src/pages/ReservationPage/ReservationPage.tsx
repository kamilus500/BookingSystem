import React, { useReducer } from "react";
import Size from "../../components/Size/Size";
import Addons from "../../components/Addons/Addons";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useLocation } from "react-router";
import AddressInput from "../../components/AddressInput/AddressInput";
import UserInput from "../../components/UserInput/UserInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { useCookies } from "react-cookie";

type LocationState = {
  size: string;
};

export enum OrderActions {
  SET_STEP_INC = "SETSTEPINC",
  SET_STEP_DEC = "SETSTEPDEC",
  SET_SIZE = "SETSIZE",
  SET_BBQ = "SETBBQ",
  SET_SPEAKER = "SETSPEAKER",
  SET_CHAIRS = "SETCHAIRS",
  SET_TABLES = "SETTABLES",
  SET_DATE = "SETDATE",
  SET_ADDRESS = "SETADDRESS",
  SET_USER = "SETUSER",
}

export interface OrderAction {
  type: OrderActions;
  payload?: any;
}

export interface OrderState {
  step: number;
  size: string;
  bbq: boolean;
  speaker: boolean;
  chairs: number;
  tables: number;
  date: Date | null;
  address: {
    street: string;
    buildingNumber: string;
    zipCode: string;
    city: string;
  };
  user: {
    firstName: string;
    lastName: string;
    userId?: number;
  };
}

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case OrderActions.SET_SIZE: {
      return { ...state, size: action.payload };
    }
    case OrderActions.SET_STEP_INC: {
      return { ...state, step: state.step + 1 };
    }
    case OrderActions.SET_STEP_DEC: {
      if (state.step > 0) return { ...state, step: state.step - 1 };

      return state;
    }
    case OrderActions.SET_CHAIRS: {
      return { ...state, chairs: action.payload };
    }
    case OrderActions.SET_TABLES: {
      return { ...state, tables: action.payload };
    }
    case OrderActions.SET_DATE: {
      return { ...state, date: action.payload };
    }
    case OrderActions.SET_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          [action.payload.id]: action.payload.value,
        },
      };
    case OrderActions.SET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.id]: action.payload.value,
        },
      };
    }
    case OrderActions.SET_BBQ: {
      return { ...state, bbq: action.payload };
    }
    case OrderActions.SET_SPEAKER: {
      return { ...state, speaker: action.payload };
    }
    default:
      return state;
  }
};

const ReservationPage: React.FC = () => {
  const { state } = useLocation<LocationState>();
  const [cookies] = useCookies(["loginData"]);
  const initialOrderState: OrderState = {
    step: 0,
    size: state.size,
    bbq: false,
    speaker: false,
    chairs: 0,
    tables: 0,
    date: null,
    address: {
      street: "",
      buildingNumber: "",
      zipCode: "",
      city: "",
    },
    user: {
      firstName: cookies.loginData.name ?? "",
      lastName: cookies.loginData.lastname ?? "",
      userId: undefined,
    },
  };

  const [orderState, setOrderStateReducer] = useReducer(
    orderReducer,
    initialOrderState
  );

  const propsToPass = { orderState, setOrderStateReducer };

  switch (orderState.step) {
    case 0:
      return <Size {...propsToPass} />;
    case 1:
      return <Addons {...propsToPass} />;
    case 2:
      return <DatePicker {...propsToPass} />;
    case 3:
      return <AddressInput {...propsToPass} />;
    case 4:
      return <UserInput {...propsToPass} />;
    case 5:
      return <OrderSummary {...propsToPass} />;
  }

  return (
    <>
      {/*<Size {...propsToPass} />*/}
      {/*<Addons {...propsToPass} />*/}
      {/*<DatePicker {...propsToPass} />*/}
      {/*<AddressInput {...propsToPass} />*/}
      {/*<UserInput {...propsToPass} />*/}
      {/*<OrderSummary {...propsToPass} />*/}
    </>
  );
};

export default ReservationPage;
