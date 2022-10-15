import React from "react";
import { Card } from "flowbite-react";

const Pricing: React.FC<{ size: string; price: string }> = ({
  size,
  price,
}) => {
  return (
    <section className="max-w-xs md:max-w-none shrink-0 md:shrink snap-center">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
          {size}
        </h5>
        <h2 className="text-6xl font-bold">{price}</h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget mauris vulputate.
        </p>
        <ul className="list-disc list-inside">
          <li>5x6 M</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
        <button className="block w-full py-2 rounded border-violet-200 border-2 text-violet-600">
          Reserve
        </button>
      </Card>
    </section>
  );
};

export default Pricing;
