import React, { useReducer } from "react";
import Size from "../../components/Size/Size";
import Addons from "../../components/Addons/Addons";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useLocation } from "react-router";
import AddressInput from "../../components/AddressInput/AddressInput";
import UserInput from "../../components/UserInput/UserInput";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { useCookies } from "react-cookie";
import { OrderActions } from "../../models/OrderActions";
import { OrderState } from "../../models/OrderState";
import Wrapper from "../../components/Ui/Wrapper";

export type LocationState = {
  size: string;
  tentId: number;
  price: number;
};

export interface OrderAction {
  type: OrderActions;
  payload?: any;
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
    case OrderActions.SET_PRICE: {
      if (action.payload) {
        return { ...state, totalValue: action.payload };
      }

      let totalValue = 0;

      totalValue += state.price;

      if (state.bbq) {
        totalValue += 60;
      }

      if (state.speaker) {
        totalValue += 100;
      }

      if (state.tables) {
        totalValue += state.tables * 15;
      }

      if (state.chairs) {
        totalValue += state.tables * 10;
      }

      return { ...state, totalValue };
    }

    default:
      return state;
  }
};

const ReservationPage: React.FC = () => {
  const { state } = useLocation<LocationState>();
  const [cookies] = useCookies(["loginData"]);

  const initialOrderState: OrderState = {
    price: state.price,
    totalValue: 0,
    tentId: state.tentId,
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
      email: "",
      firstName: cookies?.loginData?.name ? cookies.loginData.name : "",
      lastName: cookies?.loginData?.lastname ? cookies.loginData.lastname : "",
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
      return (
        <Wrapper>
          <Size {...propsToPass} />
          <Addons {...propsToPass} />
        </Wrapper>
      );
    case 1:
      return (
        <Wrapper>
          <DatePicker {...propsToPass} />
        </Wrapper>
      );
    case 2:
      return (
        <Wrapper>
          <AddressInput {...propsToPass} />
          <UserInput {...propsToPass} />
        </Wrapper>
      );
    case 3:
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
