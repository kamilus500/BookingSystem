import React from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

import OrderModel from "../../models/Order";

export const OneOrder: React.FC<{ order: OrderModel }> = ({ order }) => {
  const [cookies] = useCookies(["loginData"]);
  function deleteOrder() {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/order/" + order.orderId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.loginData.token,
        },
      }
    );
  }
  const { t, i18n } = useTranslation();

  return (
    <tr className=" lg:hover:bg-gray-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3  text-center border border-b block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("Date")}
          </span>
          {new Date(order.dateTime).toLocaleDateString(i18n.language)}
        </>
      </td>
      <td className="w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
            {t("Cost")}
          </span>
          {order.cost}
        </>
      </td>
      <td className="w-full lg:w-auto p-3   border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("Status")}
          </span>
          <span className="rounded bg-green-700 py-1 px-3 text-xs font-bold">
            {order.isAccepted ? t("Accepted") : t("Awaiting acception")}
          </span>
          <span className="rounded bg-blue-700 py-1 px-3 text-xs font-bold">
            {order.isEnd ? t("Completed") : t("Pending")}
          </span>
        </>
      </td>
      <td className="w-full lg:w-auto p-3 border border-b text-center block lg:table-cell relative lg:static">
        <>
          <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
            {t("Actions")}
          </span>
          <button
            onClick={deleteOrder}
            className="text-blue-400 hover:text-blue-600 "
          >
            Remove
          </button>
        </>
      </td>
    </tr>
  );
};