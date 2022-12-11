import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import React from "react";
import { useCookies } from "react-cookie";
import Comment from "../../models/Comment";
import { useTranslation } from "react-i18next";
const Opinion: React.FC<{ opinion: Comment }> = ({ opinion }) => {
  const [cookies] = useCookies(["loginData"]);
  const { t } = useTranslation();

  function deleteClick(id: number) {
    fetch("https://booking-tent-api.azurewebsites.net/api/delete/?id=" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.loginData.token,
      },
    }).then((res) => console.log(res));
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
      {opinion.userId === cookies.loginData?.userId && (
        <button
          onClick={() => deleteClick(6)}
          className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-violet-600"
        >
          {t("Delete")}
        </button>
      )}
    </div>
  );
};

export default Opinion;
