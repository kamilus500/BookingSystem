import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { OneUser } from "../../components/User/OneUser";
import User from "../../models/User";

export const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://booking-tent-api.azurewebsites.net/api/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: User[]) => {
        setUsers(res);
      });
  }, []);

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase   hidden lg:table-cell">
            {t("FirstName")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("LastName")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Email")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Actions")}
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <OneUser key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
};
