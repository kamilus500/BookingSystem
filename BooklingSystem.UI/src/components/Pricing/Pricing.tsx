import React from "react";
import { Card } from "flowbite-react";

const Pricing: React.FC<{
  size: string;
  price: string;
  imgSrc: string;
  tech: string[];
  text?: string;
  children?: any;
}> = ({ size, price, imgSrc, tech, text, children }) => {
  return (
    <div className="max-w-sm md:max-w-md shrink-0 snap-center mx-auto">
      <Card imgSrc={imgSrc}>
        <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
          {size}
        </h5>
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white">
          {price.toUpperCase()}
        </h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {text ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget mauris vulputate."}
        </p>
        <ul className="list-disc list-inside text-gray-900 dark:text-white">
          {tech.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
        {children}
      </Card>
    </div>
  );
};

export default Pricing;
