import React, { useEffect, useState } from "react";
import Opinion from "./Opinion";

const OpinionList = () => {

  const [opinions, setOpinions] = useState([{name: "", opinion: "", grade: 0}]);

  useEffect(() => {
    const resp = fetch(
      "https://booking-tent-api.azurewebsites.net/api/comment/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setOpinions([{ name: "Emil", opinion: "Dobre", grade: 5 }, { name: "Kamil", opinion: "Średnie", grade: 3 }])
    return console.log(resp);
  }, []);

  return (
    <div id="about" className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl">Comments From People</h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16">
        {opinions.map((opinion) => {
          return (<Opinion opinion={opinion}/>)
        })}
      </div>
    </div>
  );
};

export default OpinionList;
