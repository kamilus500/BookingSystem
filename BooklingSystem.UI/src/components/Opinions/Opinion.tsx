import { Avatar } from "flowbite-react/lib/esm/components/Avatar";
import React from "react";

const Opinion = () => {
  return (
    <div className="max-w-md space-y-4 shrink mx-auto border rounded-lg p-4">
      <header className="flex gap-2 items-center">
        <Avatar rounded={true} size="lg" />
        <div className="rounded-full flex flex-col justify-between">
          <h3 className="text-2xl">Sean Reinard</h3>
          <p>Lorem Ipsum</p>
        </div>
      </header>
      <main className="text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          suscipit mauris. Suspendisse potenti. Curabitur sodales fringill
        </p>
      </main>
    </div>
  );
};

export default Opinion;
