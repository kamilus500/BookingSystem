import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import User from "../../models/User";

export const ManageUsers: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch("https://booking-tent-api.azurewebsites.net/api/user/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res: User[]) => {
  //       setUsers(res);
  //     });
  // }, []);
  return (
    <div id="about" className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl">user11</h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16"></div>
    </div>
  );
};
