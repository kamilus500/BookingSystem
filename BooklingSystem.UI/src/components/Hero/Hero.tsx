import React from "react";
import HeroImg from "./HeroImg";

const Hero: React.FC = () => {
  return (
    <section>
      <div>
        <header className="text-center">
          <h1 className="font-bold text-3xl md:text-6xl py-6 w-9/12 md:w-6/12 md:pt-26 mx-auto">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="md:pt-6">
            Lorem ipsum sit, amet, consecrate disciplining elt.
          </p>
        </header>
      </div>
      <HeroImg />
    </section>
  );
};

export default Hero;
