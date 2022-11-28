import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavList from "./NavList";
import NavIcon from "./NavIcon";
import ListItem from "./ListItem";
import { HashRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const openNavHeader = () => {
    setNavOpen(!navOpen);
  };
  const [language, setLanguage] = useState(false);
  const changeLanguage = () => {
    setLanguage(!language)
    i18n.changeLanguage(language ? "en" : "pl")
  }

  return (
    <nav className="sticky top-0 z-50 bg-black">
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
            <ListItem aHref="#">{t("Home")}</ListItem> 
            <ListItem aHref="#features">{t("Tents")}</ListItem>
            <ListItem aHref="#pricing">{t("Pricing")}</ListItem>
            <ListItem aHref="#about">{t("Opinions")}</ListItem>
            {/*<ListItem hidden>Sign In</ListItem>*/}
            {/*<ListItem hidden>Sign Up</ListItem>*/}
            {/*<ListItem hidden>🇵🇱</ListItem>*/}
          </NavList>
        </div>
        <div className="hidden md:block">
          <Link to="/login">
            <button className="py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparenttext-gray-700">
            {t("Sign In")}
            </button>
          </Link>
          <Link to="/register">
            <button className="mx-2 p-2 px-4 rounded-lg bg-violet-600 text-white">
            {t("Sign Up")}
            </button>
          </Link>
          <button onClick={changeLanguage}>{language ? "🇬🇧" : "🇵🇱"}</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
