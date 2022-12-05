import React, { Dispatch, SetStateAction, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import Comment from "../../models/Comment";

const AddOpinion: React.FC<{
  setOpinions: Dispatch<SetStateAction<Comment[]>>;
}> = ({ setOpinions }) => {
  const [cookies] = useCookies(["loginData"]);
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();

  function handleSubmit() {
    const abortController = new AbortController();
    const { signal } = abortController;
    const newComment: Comment = {
      name: cookies.loginData.name,
      userId: 4,
      message: message,
      grade: rating,
    };

    fetch("https://booking-tent-api.azurewebsites.net/api/comment/", {
      body: JSON.stringify(newComment),
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.loginData.token,
      },
    })
      .then((res) => console.log(res))
      .then(() => {
        setOpinions((cs) => [...cs, newComment]);
      });
    return () => {
      abortController.abort();
    };
  }
  return (
    <div className="max-w-md space-y-4 shrink mx-auto border rounded-lg p-4">
      <p className="m=5 text-2xl">{t("Add new opinion")}</p>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        id="comment"
        name="comment"
        required
        className="block p-3.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={t("Your comment") ?? "Your comment"}
      />
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              key={index}
              className={
                index <= (hover || rating)
                  ? "text-yellow-300 text-xl"
                  : "text-xl"
              }
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span>&#9733;</span>
            </button>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-violet-600"
      >
          {t("Submit")}
      </button>
    </div>
  );
};

export default AddOpinion;
