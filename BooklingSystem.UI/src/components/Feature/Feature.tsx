import React from "react";

const Feature: React.FC<{ title: string; icon: any; text: string }> = ({
  title,
  icon,
  text,
}) => {
  return (
    <div className="max-w-md space-y-4 shrink mx-auto">
      <header className="flex gap-2 items-center justify-center">
        <div className="bg-violet-100 rounded-full w-12 h-12 flex justify-center items-center">
          <img src={icon} alt="" />
        </div>
        <h3 className="font-bold">{title}</h3>
      </header>
      <main className="text-center">
        {text || (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            suscipit mauris. Suspendisse potenti. Curabitur sodales fringill
          </p>
        )}
      </main>
    </div>
  );
};

export default Feature;
