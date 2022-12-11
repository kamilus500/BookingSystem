import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Switch, Route, Link } from "react-router-dom";
import User from "../../models/User";
import { Account } from "./Account";
import { Orders } from "./Orders";

export const UserPanel: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);

  const [cookies] = useCookies(["loginData"]);
  useEffect(() => {
    fetch("https://booking-tent-api.azurewebsites.net/api/order/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: User[]) => {
        setUser(res);
      });
  }, []);
  console.log(user);

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
