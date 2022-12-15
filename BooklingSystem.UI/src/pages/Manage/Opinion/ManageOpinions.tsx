import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import Comment from "../../../models/Comment";
import { OneOpinion } from "./OneOpinion";

export const ManageOpinions: React.FC<{ role: number | undefined }> = ({
  role,
}) => {
  const [cookies] = useCookies(["loginData"]);

  const [opinions, setOpinions] = useState<Comment[]>([]);
  const { t } = useTranslation();
  function fetchOpinions() {
    fetch("https://booking-tent-api.azurewebsites.net/api/comment/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: Comment[]) => {
        setOpinions(res);
      });
  }
  useEffect(() => {
    fetchOpinions();
  }, []);

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase   hidden lg:table-cell">
            {t("User name")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Message")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Grade")}
          </th>
          <th className="p-3 font-bold uppercase  hidden lg:table-cell">
            {t("Actions")}
          </th>
        </tr>
      </thead>
      <tbody>
        {role === 2 &&
          opinions.map((opinion, index) => (
            <OneOpinion
              key={index}
              opinion={opinion}
              fetchOpinions={fetchOpinions}
            />
          ))}
        {role === 1 &&
          opinions
            .filter((o) => o.userId === cookies.loginData.userId)
            .map((opinion, index) => (
              <OneOpinion
                key={index}
                opinion={opinion}
                fetchOpinions={fetchOpinions}
              />
            ))}
      </tbody>
    </table>
  );
};
