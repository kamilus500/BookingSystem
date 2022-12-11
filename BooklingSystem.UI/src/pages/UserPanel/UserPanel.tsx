import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Switch, Route, Link } from "react-router-dom";
import User from "../../models/User";
import { ManageOrders } from "../Manage/ManageOrders";
import { ManageUsers } from "../Manage/ManageUsers";
import { Account } from "./Account";
import { UserOrders } from "./UserOrders";

export const UserPanel: React.FC = () => {
  const [user, setUser] = useState<User>();

  const [cookies] = useCookies(["loginData"]);
  useEffect(() => {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/user/" +
        cookies.loginData.userId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res: User) => {
        setUser(res);
      });
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <Link to="/userpanel/account">
          <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
            Account
          </button>
        </Link>
        {user?.role === 1 && (
          <Link to="/userpanel/orders">
            <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
              Orders
            </button>
          </Link>
        )}

        {user?.role === 2 && (
          <>
            <Link to="/userpanel/manageorders">
              <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
                Manage Orders
              </button>
            </Link>
            <Link to="/userpanel/manageusers">
              <button className="m-1 p-2 px-4 rounded-lg bg-violet-600 text-white">
                Manage users
              </button>
            </Link>
          </>
        )}
      </div>
      <Switch>
        <Route path="/userpanel/account">
          <Account user={user} />
        </Route>
        <Route path="/userpanel/orders">
          <UserOrders orders={user?.orders} />
        </Route>
        <Route path="/userpanel/manageusers">
          <ManageUsers />
        </Route>
        <Route path="/userpanel/manageorders">
          <ManageOrders />
        </Route>
      </Switch>
    </div>
  );
};
