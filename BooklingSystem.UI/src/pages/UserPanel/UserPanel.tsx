import React from "react";

import { useCookies } from "react-cookie";

export const UserPanel: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return <div>User Panel of {cookies.loginData.name}</div>;
};
