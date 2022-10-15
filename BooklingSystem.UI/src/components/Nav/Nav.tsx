import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavList from "./NavList";
import NavIcon from "./NavIcon";
import ListItem from "./ListItem";

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNavHeader = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white px-4 sm:px-4 py-2.5">
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
            <ListItem>Home</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>About Us</ListItem>
            {/*<ListItem hidden>Sign In</ListItem>*/}
            {/*<ListItem hidden>Sign Up</ListItem>*/}
            {/*<ListItem hidden>🇵🇱</ListItem>*/}
          </NavList>
        </div>
        <div className="hidden md:block">
          <button className="text-black">Sign In</button>
          <button className="mx-2 p-2 px-4 rounded-lg bg-violet-600 text-white">
            Sign Up
          </button>
          <span>🇵🇱</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
