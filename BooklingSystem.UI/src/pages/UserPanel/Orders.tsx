import React from "react";

import { useCookies } from "react-cookie";

export const Orders: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return <div>Orders</div>;
};
