import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

export const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Comment[]>([]);
  const [cookies] = useCookies(["loginData"]);
  useEffect(() => {
    fetch("https://booking-tent-api.azurewebsites.net/api/order/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: Comment[]) => {
        setOrders(res);
      });
  }, []);
  return (
    <div id="about" className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl"></h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16"></div>
    </div>
  );
};
