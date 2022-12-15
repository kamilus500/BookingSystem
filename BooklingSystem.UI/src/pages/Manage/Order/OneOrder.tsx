import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

import Order from "../../../models/Order";
import AddOpinion from "../../../components/Opinions/AddOpinion";

export const OneOrder: React.FC<{
  order: Order;
  fetchOrders: () => void;
  role: number;
}> = ({ order, fetchOrders, role }) => {
  const [cookies] = useCookies(["loginData"]);
  const [addOpinion, setAddOpinion] = useState(false);
  const { t, i18n } = useTranslation();

  function deleteOrder() {
    fetch("https://booking-tent-api.azurewebsites.net/api/order/" + order.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.loginData.token,
      },
    }).then(() => fetchOrders());
  }

  function acceptOrder() {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/order/accept/" + order.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.loginData.token,
        },
      }
    ).then(() => fetchOrders());
  }

  function endOrder() {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/order/finish/" + order.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.loginData.token,
        },
      }
    ).then(() => fetchOrders());
  }

  return (
    <>
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
              {t("Tent size")}
            </span>
            {order.tentId === 1 && t("Small")}
            {order.tentId === 2 && t("Medium")}
            {order.tentId === 3 && "Giga"}
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
            <button
              onClick={acceptOrder}
              className="rounded mr-1 bg-green-700 py-1 px-3 text-xs font-bold"
            >
              {order.isAccepted ? t("Accepted") : t("Awaiting acception")}
            </button>
            <button
              onClick={endOrder}
              className="rounded bg-blue-700 py-1 px-3 text-xs font-bold"
            >
              {order.isEnd ? t("Completed") : t("Pending")}
            </button>
          </>
        </td>
        <td className="w-full lg:w-auto p-3 border border-b text-center block lg:table-cell relative lg:static">
          <>
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
              {t("Actions")}
            </span>
            <button
              onClick={deleteOrder}
              className="rounded mr-1 bg-red-700 py-1 px-3 text-xs font-bold"
            >
              {t("Delete reservation")}
            </button>
          </>
          <>
            {role === 1 && (
              <>
                <span className="ms-4 lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
                  {t("Actions")}
                </span>
                <button
                  onClick={() => setAddOpinion((a) => !a)}
                  className="rounded mr-1 bg-green-500 py-1 px-3 text-xs font-bold"
                  data-modal-toggle="defaultModal"
                  type="button"
                >
                  {t("Add opinion")}
                </button>
              </>
            )}
            {addOpinion && <AddOpinion setAddOpinion={setAddOpinion} />}
            <div
              id="popup-modal"
              className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </td>
      </tr>
    </>
  );
};
