import React from "react";

import { useCookies } from "react-cookie";

export const Account: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return (
    <div>
      Your name: {cookies.loginData.name}
      <br />
      Your lastname:{cookies.loginData.lastname}
    </div>
  );
};
