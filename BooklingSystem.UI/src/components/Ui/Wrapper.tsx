import { Breadcrumb } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Wrapper: React.FC<{
  children: React.ReactNode;
  step: number;
}> = ({ children, step }) => {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-4 my-10 items-center justify-center">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item>
          <span className={step === 0 ? "font-bold underline" : ""}>
            {t("Order")}
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className={step === 1 ? "font-bold underline" : ""}>
            {t("Date")}
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className={step === 2 ? "font-bold underline" : ""}>
            {t("Address")}
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className={step === 3 ? "font-bold underline" : ""}>
            {t("Summary")}
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
      {children}
    </div>
  );
};

export default Wrapper;
