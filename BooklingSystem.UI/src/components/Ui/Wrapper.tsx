import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full h-screen justify-center">
      {children}
    </div>
  );
};

export default Wrapper;
