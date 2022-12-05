import React from "react";

import FeatureList from "../../components/Feature/FeatureList";
import Hero from "../../components/Hero/Hero";

import PricingList from "../../components/Pricing/PricingList";
import Summary from "../../components/Summary/Summary";
import OpinionList from "../../components/Opinions/OpinionList";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {

  return (
    <>
      <Hero />
      <FeatureList />
      <PricingList />
      <OpinionList />
      <Summary />
      <Footer />
    </>
  );
};

export default Home;
