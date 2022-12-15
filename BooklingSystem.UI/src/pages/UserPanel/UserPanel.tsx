import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Switch, Route, Link } from "react-router-dom";
import User from "../../models/User";
import { ManageOpinions } from "../Manage/Opinion/ManageOpinions";
import { ManageOrders } from "../Manage/Order/ManageOrders";
import { ManageUsers } from "../Manage/User/ManageUsers";
import { Account } from "./Account";

export const UserPanel: React.FC = () => {
  const [user, setUser] = useState<User>();

  const [cookies] = useCookies(["loginData"]);

  useEffect(() => {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/user/" +
        cookies.loginData?.userId,
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
      <div className="flex flex-col mr-3">
        <Link to="/userpanel/account">
          <button className="m-1 p-2 rounded-lg bg-violet-600 text-white w-full">
            Konto
          </button>
        </Link>

        {user?.role === 2 && (
          <>
            <Link to="/userpanel/manageusers">
              <button className="m-1 p-2 rounded-lg bg-violet-600 text-white  w-full">
                Zarządzaj
                <br />
                użytkownikami
              </button>
            </Link>
          </>
        )}
        <Link to="/userpanel/manageorders">
          <button className="m-1 p-2 rounded-lg bg-violet-600 text-white  w-full">
            Zarządzaj
            <br />
            rezerwacjami
          </button>
        </Link>
        <Link to="/userpanel/manageopinions">
          <button className="m-1 p-2 rounded-lg bg-violet-600 text-white  w-full">
            Zarządzaj
            <br />
            opiniami
          </button>
        </Link>
      </div>

      <Switch>
        <Route path="/userpanel/account">
          <Account user={user} />
        </Route>

        <Route path="/userpanel/manageusers">
          <ManageUsers />
        </Route>
        <Route path="/userpanel/manageorders">
          <ManageOrders role={user?.role} userId={user?.id} />
        </Route>
        <Route path="/userpanel/manageopinions">
          <ManageOpinions role={user?.role} />
        </Route>
      </Switch>
    </div>
  );
};
