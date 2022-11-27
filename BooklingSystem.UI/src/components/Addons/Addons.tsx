import React, { useRef } from "react";

const Addons: React.FC<{
  bbq: boolean;
  setBbq: React.Dispatch<React.SetStateAction<boolean>>;
  speaker: boolean;
  setSpeaker: React.Dispatch<React.SetStateAction<boolean>>;
  chairs: number;
  setChairs: React.Dispatch<React.SetStateAction<number>>;
  tables: number;
  setTables: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  bbq,
  speaker,
  chairs,
  tables,
  setBbq,
  setChairs,
  setTables,
  setSpeaker,
  setStep,
}) => {
  const chairsRef = useRef<HTMLInputElement>(null);
  const tablesRef = useRef<HTMLInputElement>(null);

  const chairHandler = () => {
    if (chairsRef.current) {
      setChairs(chairsRef.current.valueAsNumber);
    }
  };

  const tableHandler = () => {
    if (tablesRef.current) {
      setTables(tablesRef.current.valueAsNumber);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label>
        Dodatkowy grill
        <input
          type="checkbox"
          name="bbq"
          onInput={() => setBbq((state) => !state)}
          defaultChecked={bbq}
        />
      </label>

      <label>
        Zestaw muzyczny - głośniki oraz mikrofon
        <input
          type="checkbox"
          name="speaker"
          onInput={() => setSpeaker((state) => !state)}
          defaultChecked={speaker}
        />
      </label>

      <label>
        Liczba krzeseł:
        <input
          type="number"
          placeholder="Podaj liczbę..."
          min={0}
          onInput={chairHandler}
          ref={chairsRef}
          value={isNaN(chairs) ? 0 : chairs}
        />
      </label>

      <label>
        Liczba stołów:
        <input
          type="number"
          placeholder="Podaj liczbę..."
          min={0}
          onInput={tableHandler}
          ref={tablesRef}
          value={isNaN(tables) ? 0 : tables}
        />
      </label>

      <div className="flex gap-4">
        <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state - 1)}
        >
          Wróć
        </button>
        <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state + 1)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Addons;
