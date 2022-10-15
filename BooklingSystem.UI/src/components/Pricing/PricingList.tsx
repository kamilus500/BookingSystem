import React from "react";

import Pricing from "./Pricing";

const PricingList: React.FC = () => {
  return (
    <div className="px-4 container my-12 mx-auto flex gap-4 lg:gap-16 overflow-hidden overflow-x-scroll snap-x scrollbar-hide bg-hero bg-origin-border">
      <Pricing size="Small" price="489 pln" />
      <Pricing size="Medium" price="589 pln" />
      <Pricing size="Giga" price="889 pln" />
    </div>
  );
};

export default PricingList;