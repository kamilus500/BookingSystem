import React from "react";

import { useCookies } from "react-cookie";
import Order from "../../models/Order";

export const Orders: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return (
    <div id="about" className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl"></h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16"></div>
    </div>
  );
};
