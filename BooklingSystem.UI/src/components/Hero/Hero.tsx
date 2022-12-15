import React, { memo } from "react";
import HeroImg from "./HeroImg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <div>
        <header className="text-center">
          <h1 className="font-bold text-3xl md:text-6xl py-2 w-9/12 md:w-6/12 md:pt-26 mx-auto">
            Tentsnation
          </h1>
          <h1 className="font-bold text-2xl md:text-5xl py-6 w-9/12 md:w-6/12 md:pt-26 mx-auto">
            <Link
              to={{
                pathname: "/reservation",
                state: { size: "giga", tentId: 3, price: 889 },
              }}
            >
              {t("PageText1")}
            </Link>
          </h1>
          <Link
            to={{
              pathname: "/reservation",
              state: { size: "giga", tentId: 3, price: 889 },
            }}
          >
            <p className="md:pt-6">{t("PageText2")}</p>
          </Link>
        </header>
      </div>
      <Link
        to={{
          pathname: "/reservation",
          state: { size: "giga", tentId: 3, price: 889 },
        }}
      >
        <HeroImg />
      </Link>
    </section>
  );
};

export default memo(Hero);
