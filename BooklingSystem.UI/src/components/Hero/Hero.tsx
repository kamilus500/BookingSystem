import React from "react";
import HeroImg from "./HeroImg";

const Hero: React.FC = () => {
  return (
    <section>
      <div>
        <header className="text-center">
          <h1 className="font-bold text-3xl md:text-6xl py-2 w-9/12 md:w-6/12 md:pt-26 mx-auto">
            Tentsnation
          </h1>
          <h1 className="font-bold text-2xl md:text-5xl py-6 w-9/12 md:w-6/12 md:pt-26 mx-auto">
            Wiemy co to dobra impreza pod gołym niebem!
          </h1>
          <p className="md:pt-6">
            Zapraszamy do składania zamówień z naszej nieopłacalnej oferty!
          </p>
        </header>
      </div>
      <HeroImg />
    </section>
  );
};

export default Hero;
