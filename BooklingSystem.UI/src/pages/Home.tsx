import React from "react";

import FeatureList from "../components/Feature/FeatureList";
import Hero from "../components/Hero/Hero";

import Nav from "../components/Nav/Nav";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureList />
    </>
  );
};

export default Home;
