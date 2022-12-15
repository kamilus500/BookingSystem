import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

import Comment from "../../../models/Comment";

export const OneOpinion: React.FC<{
  opinion: Comment;
  fetchOpinions: () => void;
}> = ({ opinion, fetchOpinions }) => {
  const [cookies] = useCookies(["loginData"]);
  const { t } = useTranslation();
  function deleteOpinion() {
    fetch(
      "https://booking-tent-api.azurewebsites.net/api/comment/" +
        opinion.commentId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.loginData.token,
        },
      }
    ).then(() => fetchOpinions());
  }

  return (
    <>
      <tr className=" lg:hover:bg-gray-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td className="w-full lg:w-auto p-3  text-center border border-b block lg:table-cell relative lg:static">
          <>
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
              {t("User name")}
            </span>
            {opinion.name}
          </>
        </td>
        <td className="w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static">
          <>
            <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
              {t("Message")}
            </span>
            {opinion.message}
          </>
        </td>
        <td className="w-full lg:w-auto p-3  border border-b text-center block lg:table-cell relative lg:static">
          <>
            <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
              {t("Grade")}
            </span>
            {opinion.grade}
          </>
        </td>

        <td className="w-full lg:w-auto p-3 border border-b text-center block lg:table-cell relative lg:static">
          <>
            <span className="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase">
              {t("Actions")}
            </span>
            <button
              onClick={deleteOpinion}
              className="rounded mr-1 bg-red-500 py-1 px-3 text-xs font-bold"
            >
              {t("Delete opinion")}
            </button>
          </>
        </td>
      </tr>
    </>
  );
};
