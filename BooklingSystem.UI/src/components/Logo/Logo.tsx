import React from "react";

import LogoImg from "../../images/Logo.png";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src={LogoImg} className="mr-3 h-6 sm:h-9" alt="TentsNation Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        TentsNation
      </span>
    </div>
  );
};

export default Logo;
