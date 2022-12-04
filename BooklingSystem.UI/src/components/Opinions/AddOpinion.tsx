import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Comment from "../../models/Comment";

const AddOpinion: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  function handleSubmit() {
    const newComment: Comment = {
      name: cookies.loginData.name,
      userId: 444,
      message: message,
      grade: rating,
    };
    console.log(newComment);

    fetch("https://booking-tent-api.azurewebsites.net/api/comment/", {
      body: JSON.stringify(newComment),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.loginData.token,
      },
    }).then((res) => console.log(res));
  }
  return (
    <div className="max-w-md space-y-4 shrink mx-auto border rounded-lg p-4">
      Add new opinion
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        id="comment"
        name="comment"
        required
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your comment"
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
                  : "text-black text-xl"
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
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </div>
  );
};

export default AddOpinion;
