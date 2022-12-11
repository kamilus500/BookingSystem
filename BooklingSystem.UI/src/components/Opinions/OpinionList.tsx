import { memo, useEffect, useState } from "react";
import Opinion from "./Opinion";
import Comment from "../../models/Comment";
import { useCookies } from "react-cookie";
import AddOpinion from "./AddOpinion";
import { useTranslation } from "react-i18next";
const OpinionList = () => {
  const [opinions, setOpinions] = useState<Comment[]>([]);
  const [cookies] = useCookies(["loginData"]);
  const { t } = useTranslation();
  useEffect(() => {
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
  }, []);

  return (
    <div id="about" className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl">{t("Comments From People")}</h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16">
        {opinions.map((opinion, index) => (
          <Opinion key={index} opinion={opinion} />
        ))}
        {cookies.loginData && <AddOpinion setOpinions={setOpinions} />}
      </div>
    </div>
  );
};

export default memo(OpinionList);
