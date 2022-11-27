import React, { useState } from "react";
import Size from "../../components/Size/Size";
import Addons from "../../components/Addons/Addons";
import Calendarr from "../../components/Calendar/Calendar";

const ReservationPage = () => {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState("");
  const [bbq, setBbq] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [chairs, setChairs] = useState(0);
  const [tables, setTables] = useState(0);

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
      return <Calendarr />;
  }

  return <></>;
};

export default ReservationPage;
