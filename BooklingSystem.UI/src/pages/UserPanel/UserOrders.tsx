import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OneOrder } from "../../components/Order/OneOrder";

import Order from "../../models/Order";

export const UserOrders: React.FC<{ orders: Order[] | undefined }> = ({
  orders,
}) => {
  const { t } = useTranslation();

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
        {orders?.map((order) => (
          <OneOrder order={order} />
        ))}
      </tbody>
    </table>
  );
};
