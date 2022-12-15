import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { Switch, Route, Link } from "react-router-dom";
import User from "../../models/User";
import { ManageOpinions } from "../Manage/Opinion/ManageOpinions";
import { ManageOrders } from "../Manage/Order/ManageOrders";
import { ManageUsers } from "../Manage/User/ManageUsers";
import { Account } from "./Account";

export const UserPanel: React.FC = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<User>();
  const [modal, setModal] = useState<{
    message: string;
    show: boolean;
  }>({ message: "", show: false });
  function displayModal(message: string) {
    setModal({ message, show: true });
  }

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
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-row mr-3 md:flex-col flex-wrap mb-2">
        <Link to="/userpanel/account">
          <button className="h-20 w-40 m-1 p-2  rounded-lg bg-violet-600 text-white">
            Konto
          </button>
        </Link>

        {user?.role === 2 && (
          <>
            <Link to="/userpanel/manageusers">
              <button className="h-20 w-40 m-1 p-2 rounded-lg bg-violet-600 text-white">
                {t("Manage")} {t("users")}
              </button>
            </Link>
          </>
        )}
        <Link to="/userpanel/manageorders">
          <button className="h-20 w-40 m-1 p-2 rounded-lg bg-violet-600 text-white">
            {t("Manage")} {t("orders")}
          </button>
        </Link>
        <Link to="/userpanel/manageopinions">
          <button className="w-40 m-1 p-2 h-20 rounded-lg bg-violet-600 text-white">
            {t("Manage")} {t("opinions")}
          </button>
        </Link>
      </div>
      <Modal
        show={modal.show}
        onClose={() => setModal({ message: "", show: false })}
      >
        <Modal.Header>{modal.message}</Modal.Header>
        <Modal.Footer>
          <Button onClick={() => setModal({ message: "", show: false })}>
            {t("Close")}
          </Button>
        </Modal.Footer>
      </Modal>

      <Switch>
        <Route path="/userpanel/account">
          <Account user={user} />
        </Route>

        <Route path="/userpanel/manageusers">
          <ManageUsers displayModal={displayModal} />
        </Route>
        <Route path="/userpanel/manageorders">
          <ManageOrders
            role={user?.role}
            userId={user?.id}
            displayModal={displayModal}
          />
        </Route>
        <Route path="/userpanel/manageopinions">
          <ManageOpinions role={user?.role} displayModal={displayModal} />
        </Route>
      </Switch>
    </div>
  );
};
