import React, { useState } from "react";
import Size from "../../components/Size/Size";
import Addons from "../../components/Addons/Addons";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useLocation } from "react-router";
import AddressInput from "../../components/AddressInput/AddressInput";

type LocationState = {
  size: string;
};

const ReservationPage: React.FC = (props) => {
  const { state } = useLocation<LocationState>();

  const [step, setStep] = useState(0);
  const [size, setSize] = useState(state.size);
  const [bbq, setBbq] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [chairs, setChairs] = useState(0);
  const [tables, setTables] = useState(0);
  const [date, setDate] = useState<Date>();

  console.log(date);

  const sizeProps = { setStep, setSize, size };
  const addonsProps = {
    bbq,
    setBbq,
    speaker,
    setSpeaker,
    chairs,
    setChairs,
    tables,
    setTables,
    setStep,
  };

  switch (step) {
    case 0:
      return <Size {...sizeProps} />;
    case 1:
      return <Addons {...addonsProps} />;
    case 2:
      return <DatePicker setDate={setDate} date={date!} setStep={setStep} />;
    case 3:
      return <AddressInput setStep={setStep} />;
  }

  return <></>;
};

export default ReservationPage;
