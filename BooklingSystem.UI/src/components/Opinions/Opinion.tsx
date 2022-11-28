import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import React from "react";

const Opinion: React.FC<{ opinion: { name: String, opinion: String, grade: Number } }> = ({ opinion }) => {
  return (
    <div className="max-w-md space-y-4 shrink mx-auto border rounded-lg p-4">
      <header className="flex gap-2 items-center">
        <Avatar rounded={true} size="lg" />
        <div className="rounded-full flex flex-col justify-between">
          <h3 className="text-2xl">{opinion.name}</h3>
          <p>Lorem Ipsum</p>
        </div>
      </header>
      <main className="text-center">
        <p>
          {opinion.opinion}</p>
      </main>
      {[...Array(opinion.grade || 5)].map((star) => {
              return <>⭐ </>;
            })}
    </div>
  );
};

export default Opinion;
