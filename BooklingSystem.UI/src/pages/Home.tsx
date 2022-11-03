import React from "react";

import FeatureList from "../components/Feature/FeatureList";
import Hero from "../components/Hero/Hero";

import Nav from "../components/Nav/Nav";
import PricingList from "../components/Pricing/PricingList";
import Summary from "../components/Summary/Summary";
import OpinionList from "../components/Opinions/OpinionList";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureList />
      <PricingList />
      <OpinionList />
      <Summary />
    </>
  );
};

export default Home;
