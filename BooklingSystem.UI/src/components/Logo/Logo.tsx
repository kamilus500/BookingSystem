import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <LogoIcon />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          TentsNation
        </span>
      </div>
    </Link>
  );
};

export default Logo;
