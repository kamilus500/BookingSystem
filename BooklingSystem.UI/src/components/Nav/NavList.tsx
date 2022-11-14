import React from "react";

const NavList: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      {children}
    </ul>
  );
};

export default NavList;
