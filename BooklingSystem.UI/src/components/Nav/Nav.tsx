import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavList from "./NavList";
import NavIcon from "./NavIcon";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNavHeader = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <button
          onClick={openNavHeader}
          type="button"
          className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <NavIcon />
        </button>
        <div className={`${navOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <NavList>
            {/* <ListItem>Home</ListItem> */}
            <ListItem aHref="#features">Features</ListItem>
            <ListItem aHref="#pricing">Pricing</ListItem>
            <ListItem aHref="#about">About Us</ListItem>
            {/*<ListItem hidden>Sign In</ListItem>*/}
            {/*<ListItem hidden>Sign Up</ListItem>*/}
            {/*<ListItem hidden>🇵🇱</ListItem>*/}
          </NavList>
        </div>
        <div className="hidden md:block">
          <Link to="/login">
            <button className="py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparenttext-gray-700">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="mx-2 p-2 px-4 rounded-lg bg-violet-600 text-white">
              Sign Up
            </button>
          </Link>
          <span>🇵🇱</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
