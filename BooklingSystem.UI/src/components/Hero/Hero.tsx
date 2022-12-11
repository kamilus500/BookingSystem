import React, { memo } from "react";
import HeroImg from "./HeroImg";
import { useTranslation } from "react-i18next";
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
            {t("PageText1")}
          </h1>
          <p className="md:pt-6">{t("PageText2")}</p>
        </header>
      </div>
      <HeroImg />
    </section>
  );
};

export default memo(Hero);
