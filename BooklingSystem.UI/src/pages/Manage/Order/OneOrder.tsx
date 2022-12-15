import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

import Order from "../../../models/Order";
import AddOpinion from "../../../components/Opinions/AddOpinion";
import { Accordion } from "flowbite-react";

export const OneOrder: React.FC<{
  order: Order;
  fetchOrders: () => void;
  role: number;
  displayModal: (message: string) => void;
}> = ({ order, fetchOrders, role, displayModal }) => {
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
    }).then(() => {
      fetchOrders();
      displayModal("Rezerwacja została usunięta.");
    });
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
    ).then(() => {
      fetchOrders();
      displayModal(
        order.isEnd
          ? "Status akceptacji rezerwacji został zmieniony na: Czeka na akceptację"
          : "Status akceptacji rezerwacji został zmieniony na: Zaakceptowany"
      );
    });
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
    ).then(() => {
      fetchOrders();
      displayModal(
        order.isEnd
          ? "Status trwania rezerwacji został zmieniony na: W trakcie"
          : "Status trwania rezerwacji został zmieniony na: Zakończony"
      );
    });
  }

  function showDetails() {
    displayModal("Adres dostwy: " + order.adress);
  }
  return (
    <>
      <tr className="  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          onClick={showDetails}
          className="lg:hover:bg-gray-600 w-full lg:w-auto p-3  text-center border border-b block lg:table-cell relative lg:static"
        >
          <>
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
              {t("Date")}
            </span>
            {new Date(order.dateTime).toLocaleDateString(i18n.language)}
          </>
        </td>
        <td
          onClick={showDetails}
          className=" lg:hover:bg-gray-600 w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static"
        >
          <>
            <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
              {t("Tent size")}
            </span>
            {order.tentId === 1 && t("Small")}
            {order.tentId === 2 && t("Medium")}
            {order.tentId === 3 && "Giga"}
          </>
        </td>
        <td
          onClick={showDetails}
          className="lg:hover:bg-gray-600 w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static"
        >
          <>
            <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
              {t("Cost")}
            </span>
            {order.cost} PLN
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
            {addOpinion && (
              <AddOpinion
                setAddOpinion={setAddOpinion}
                displayModal={displayModal}
              />
            )}
          </>
        </td>
      </tr>
    </>
  );
};
