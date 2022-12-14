import React from "react";
import { HashLink } from "react-router-hash-link";

const ListItem: React.FC<{
  children?: React.ReactNode;
  hidden?: boolean;
  aHref?: string;
}> = ({ aHref, hidden, children }) => {
  const hiddenClass: string | null = hidden ? "sm:hidden" : null;

  return (
    <li>
      <HashLink
        smooth
        to={`/${aHref}`}
        className={`${hiddenClass} block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
      >
        {children}
      </HashLink>
    </li>
  );
};

export default ListItem;
