import React from "react";

const Button: React.FC<{ accent?: boolean }> = ({ accent }) => {
  if (accent) {
    return (
      <button className="block w-full py-2 rounded bg-purple-600 text-white">
        Reserve
      </button>
    );
  }

  return (
    <button className="block w-full py-2 rounded border-violet-200 border-2 text-violet-600">
      Reserve
    </button>
  );
};

export default Button;
