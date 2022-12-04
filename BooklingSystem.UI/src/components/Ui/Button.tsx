import React from "react";

const Button: React.FC<{
  accent?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  clickHandler?: () => void;
}> = ({ accent, children, clickHandler, disabled }) => {
  if (accent) {
    return (
      <button
        className={`block w-full py-2 rounded bg-purple-600 text-white p-4 ${
          disabled ? "bg-purple-400" : null
        }`}
        onClick={clickHandler}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`block w-full py-2 rounded border-violet-200 border-2 text-violet-600 p-4 ${
        disabled ? "text-violet-400" : null
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
