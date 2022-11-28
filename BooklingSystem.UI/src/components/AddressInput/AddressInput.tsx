import React from "react";

const AddressInput: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setStep }) => {
  return (
    <>
      <div>
        <label>
          Ulica: <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Numer mieszkania/domu: <br />
          <input type="text" required />
        </label>
      </div>

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
    </>
  );
};

export default AddressInput;
