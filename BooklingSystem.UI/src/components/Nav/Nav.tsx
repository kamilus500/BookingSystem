import React, { memo, useState } from "react";
import Logo from "../Logo/Logo";
import NavList from "./NavList";
import NavIcon from "./NavIcon";
import ListItem from "./ListItem";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const Nav: React.FC = () => {
  const history = useHistory();
  const [navOpen, setNavOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const openNavHeader = () => {
    setNavOpen(!navOpen);
  };
  const [language, setLanguage] = useState(true);
  const changeLanguage = () => {
    setLanguage(!language);
    i18n.changeLanguage(language ? "en" : "pl");
  };
  const [cookies, setCookie, removeCookie] = useCookies(["loginData"]);
  return (
    <nav className="sticky top-0 z-50 dark:bg-black bg-white">
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
            <button onClick={openNavHeader}>
              <ListItem aHref="#">{t("Home")}</ListItem>
            </button>
            <button onClick={openNavHeader}>
              <ListItem aHref="#features">{t("Tents")}</ListItem>
            </button>
            <button onClick={openNavHeader}>
              <ListItem aHref="#pricing">{t("Pricing")}</ListItem>
            </button>
            <button onClick={openNavHeader}>
              <ListItem aHref="#about">{t("Opinions")}</ListItem>
            </button>

            {!cookies.loginData && (
              <div className="ml-10 md:hidden">
                <Link to="/login">
                  <button
                    onClick={openNavHeader}
                    className="ml-10 py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparenttext-gray-700"
                  >
                    {t("Sign In")}
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    onClick={openNavHeader}
                    className="mx-2 p-2 px-4 rounded-lg bg-violet-600 text-white"
                  >
                    {t("Sign Up")}
                  </button>
                </Link>
              </div>
            )}
          </NavList>
        </div>
        {cookies.loginData ? (
          <div>
            <Link to="/userpanel" onClick={openNavHeader}>
              <button className=" mx-2 py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparenttext-gray-700">
                {cookies.loginData.name + " " + cookies.loginData.lastname}
              </button>
            </Link>
            <Link
              className="mx-2 p-2 px-4 rounded-lg bg-violet-600 text-white"
              to="/"
              onClick={() => {
                openNavHeader();
                removeCookie("loginData");
              }}
            >
              {t("Logout")}
            </Link>
            <button id={"languageButton"} onClick={changeLanguage}>
              {language ? "????????" : "????????"}
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <>
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
            </>
            <button id={"languageButton"} onClick={changeLanguage}>
              {language ? "????????" : "????????"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(Nav);
