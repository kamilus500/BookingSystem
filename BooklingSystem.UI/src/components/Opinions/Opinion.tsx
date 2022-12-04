import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import React from "react";
import Comment from "../../models/Comment";

const Opinion: React.FC<{ opinion: Comment }> = ({ opinion }) => {
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
