import squareIcon from "../../images/Icons/Square.svg";
import starIcon from "../../images/Icons/Star.svg";
import square2Icon from "../../images/Icons/Square2.svg";
import Feature from "./Feature";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const FeatureList = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    //bg-features bg-center
    <div
      id="features"
      className="container my-12 mx-auto flex flex-wrap gap-4 lg:gap-16 px-4"
    >
      <Feature
        title={t("FeaturesTitle1")}
        text={t("FeaturesText1")}
        icon={squareIcon}
      />
      <Feature
        title={t("FeaturesTitle2")}
        text={t("FeaturesText2")}
        icon={starIcon}
      />
      <Feature title="Grill" text={t("FeaturesText3")} icon={square2Icon} />
    </div>
  );
};

export default memo(FeatureList);
