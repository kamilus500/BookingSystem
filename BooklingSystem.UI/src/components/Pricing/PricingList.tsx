import React from "react";

import Pricing from "./Pricing";

const PricingList: React.FC = () => {
  return (
    //bg-hero bg-origin-border
    <div className="container my-12 mx-auto flex gap-4 lg:gap-16 px-4 overflow-hidden overflow-x-scroll snap-x scrollbar-hide ">
      <Pricing size="Small" price="489 pln" />
      <Pricing size="Medium" price="589 pln" />
      <Pricing size="Giga" price="889 pln" />
    </div>
  );
};

export default PricingList;
