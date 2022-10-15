import React from "react";

const NavList: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {children}
    </ul>
  );
};

export default NavList;
