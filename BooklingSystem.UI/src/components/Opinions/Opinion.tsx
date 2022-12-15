import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import React from "react";
import { useCookies } from "react-cookie";
import Comment from "../../models/Comment";
import { useTranslation } from "react-i18next";
const Opinion: React.FC<{ opinion: Comment }> = ({ opinion }) => {
  const [cookies] = useCookies(["loginData"]);
  const { t, i18n } = useTranslation();
  function deleteClick() {
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
    ).then((res) => console.log(res));
  }

  return (
    <div className="max-w-md space-y-4 shrink mx-auto border rounded-lg p-4">
      <header className="flex gap-2 items-center">
        <Avatar rounded={true} size="lg" />
        <div className="rounded-full flex flex-col justify-between">
          <h3 className="text-2xl">{opinion.name}</h3>
        </div>
      </header>
      <main className="text-center">
        <p>{opinion.message}</p>
      </main>
      {[...Array(opinion.grade || 5)].map((star, index) => {
        return (
          <span className={"text-yellow-300 text-xl"} key={index}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Opinion;
