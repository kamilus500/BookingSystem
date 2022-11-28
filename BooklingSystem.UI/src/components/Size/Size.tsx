import React, { useRef } from "react";

const Size: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  size: string;
}> = ({ setStep, setSize, size }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectHandler = () => {
    if (selectRef.current) {
      setSize(selectRef.current.value);
    }
  };

  return (
    <div>
      <h3>Wybierz rozmiar namiotu!</h3>

      <select
        name="size"
        onChange={selectHandler}
        ref={selectRef}
        defaultValue={size}
      >
        <option value="">--Wybierz rozmiar--</option>
        <option value="small">Mały</option>
        <option value="medium">Średni</option>
        <option value="giga">Giga</option>
      </select>

      <div className="flex gap-4">
        {/* <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state - 1)}
          disabled
        >
          Wróć
        </button> */}
        <button
          className="border p-2 bg-blue-50"
          onClick={() => setStep((state) => state + 1)}
          disabled={!size}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Size;
