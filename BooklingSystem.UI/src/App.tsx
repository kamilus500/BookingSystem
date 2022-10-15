import React from "react";

import { setupIonicReact } from "@ionic/react";

import FeatureList from "./components/Feature/FeatureList";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

import "./theme/tailwind.css";
import "./theme/variables.css";

import PricingList from "./components/Pricing/PricingList";

setupIonicReact();

const App: React.FC = () => (
  <>
    <Nav />
    <Hero />
    <FeatureList />
    <PricingList />
  </>
);

export default App;
