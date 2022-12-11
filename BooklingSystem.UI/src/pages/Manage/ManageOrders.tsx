import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OneOrder } from "../../components/Order/OneOrder";
import Order from "../../models/Order";

import OrderModel from "../../models/Order";

export const ManageOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
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
        {orders.map((order) => (
          <OneOrder order={order} />
        ))}
      </tbody>
    </table>
  );
};
