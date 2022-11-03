import React from "react";
import Opinion from "./Opinion";

const OpinionList = () => {
  return (
    <div className="container my-12 mx-auto px-4">
      <h2 className="my-12 text-4xl">Comments From People</h2>
      <div className="container flex flex-wrap gap-4 lg:gap-16">
        <Opinion />
        <Opinion />
        <Opinion />
      </div>
    </div>
  );
};

export default OpinionList;
