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
  return <div>Orders</div>;
};
