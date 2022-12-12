import React from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

import User from "../../models/User";

export const OneUser: React.FC<{ user: User }> = ({ user }) => {
  const [cookies] = useCookies(["loginData"]);
  function deleteUser() {
    fetch("https://booking-tent-api.azurewebsites.net/api/user/" + user.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.loginData.token,
      },
    });
  }
  const { t } = useTranslation();

  return (
    <tr className=" lg:hover:bg-gray-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3  text-center border border-b block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("FirstName")}
          </span>
          {user.firstName}
        </>
      </td>
      <td className="w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
            {t("LastName")}
          </span>
          {user.lastName}
        </>
      </td>
      <td className="w-full lg:w-auto p-3   border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("Email")}
          </span>
          {user.email}
        </>
      </td>
      <td className="w-full lg:w-auto p-3 border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("Actions")}
          </span>
          <button
            onClick={deleteUser}
            className="text-blue-400 hover:text-blue-600 "
          >
            Remove
          </button>
        </>
      </td>
    </tr>
  );
};
