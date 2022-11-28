import React from "react";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";

import Pricing from "./Pricing";

const PricingList: React.FC = () => {
  return (
    //bg-hero bg-origin-border
    <div
      id="pricing"
      className="container my-12 mx-auto flex gap-4 lg:gap-16 px-4 overflow-hidden overflow-x-scroll snap-x scrollbar-hide "
    >
      <Pricing
        size="Small"
        price="489 pln"
        imgSrc="https://cdn.shopify.com/s/files/1/2572/3764/files/Cross_Cable_1_a375c816-1e73-44bf-bacb-aacca87ba691_1024x1024.jpg?v=1614401104"
        tech={["5x6 M", "30 osób", "Otwierane frontowe ścianki."]}
        text="Dobry mały namiot, na mniejsze imprezy!"
      >
        <Link
          to={{
            pathname: "/reservation",
            state: { size: "small" },
          }}
        >
          <Button />
        </Link>
      </Pricing>

      <Pricing
        size="Medium"
        price="589 pln"
        imgSrc="https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6ImpwZWciLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjYwMCwiaGVpZ2h0Ijo2MDB9fSwia2V5IjoicGhvdG9fMjE4MDQyMjkyIn0=?signature=b8e859c2fb7200164b79c32ec8dbf86dc7c1b7f01ef4be8b73999dad7128cc9b"
        tech={["5x8 M", "50 osób", "Otwierane wszystkie ścianki."]}
        text="Idealny namiot na średnie imprezy, każdy będzie zadowolony!"
      >
        <Link
          to={{
            pathname: "/reservation",
            state: { size: "medium" },
          }}
        >
          <Button accent />
        </Link>
      </Pricing>

      <Pricing
        size="Giga"
        price="889 pln"
        imgSrc="https://tradetested.imgix.net/catalog/product/0/0/000bom-102015_great_white_marquee_5m_x_10m_heavy_duty_pvc-1.jpg?fit=fillmax&fill=solid&auto=format%2Ccompress"
        tech={[
          "5x10 M",
          "80 osób",
          "Możliwość dostawienia dodatkowej przestrzeni.",
        ]}
        text="Nawet największa impreza nie jest nam straszna!"
      >
        <Link
          to={{
            pathname: "/reservation",
            state: { size: "giga" },
          }}
        >
          <Button />
        </Link>
      </Pricing>
    </div>
  );
};

export default PricingList;
