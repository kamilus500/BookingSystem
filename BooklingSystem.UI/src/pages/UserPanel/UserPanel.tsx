import React from "react";

import { useCookies } from "react-cookie";
import { Switch, Route, Link } from "react-router-dom";
import { Account } from "./Account";
import { Orders } from "./Orders";

export const UserPanel: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <Link to="/userpanel/account">
          <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
            Account
          </button>
        </Link>
        <Link to="/userpanel/orders">
          <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
            Orders
          </button>
        </Link>
      </div>
      <Switch>
        <Route path="/userpanel/account">
          <Account />
        </Route>
        <Route path="/userpanel/orders">
          <Orders />
        </Route>
      </Switch>
    </div>
  );
};
