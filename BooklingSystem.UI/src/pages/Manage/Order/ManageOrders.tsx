import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OneOrder } from "./OneOrder";
import Order from "../../../models/Order";

export const ManageOrders: React.FC<{
  role: number | undefined;
  userId: number | undefined;
}> = ({ role, userId }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { t } = useTranslation();

  function fetchOrders() {
    fetch("https://booking-tent-api.azurewebsites.net/api/order/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: Order[]) => {
        setOrders(res);
      });
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase   hidden lg:table-cell">
            {t("Date")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Cost")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Status")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Actions")}
          </th>
        </tr>
      </thead>
      <tbody>
        {role === 2 &&
          orders.map((order, index) => (
            <OneOrder
              key={index}
              order={order}
              role={role}
              fetchOrders={fetchOrders}
            />
          ))}
        {role === 1 &&
          orders
            .filter((o) => o.userId === userId)
            .map((order, index) => (
              <OneOrder
                key={index}
                order={order}
                role={role}
                fetchOrders={fetchOrders}
              />
            ))}
      </tbody>
    </table>
  );
};
