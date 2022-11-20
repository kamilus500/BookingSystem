import React from "react";
import Logo from "../Logo/Logo";
import ListItem from "../Nav/ListItem";
import NavList from "../Nav/NavList";

import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoGoogle,
  logoTwitter,
  logoLinkedin,
} from "ionicons/icons";

const Footer = () => {
  return (
    <footer className="px-4 py-2.5 mx-auto container">
      <div className="flex justify-between items-center">
        <Logo />
        <NavList>
          <ListItem aHref="#">Home</ListItem>
          <ListItem aHref="#features">Features</ListItem>
          <ListItem aHref="#pricing">Pricing</ListItem>
          <ListItem aHref="#about">About Us</ListItem>
        </NavList>
        <div className="space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <IonIcon icon={logoFacebook} size="large" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <IonIcon icon={logoTwitter} size="large" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <IonIcon icon={logoLinkedin} size="large" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <IonIcon icon={logoGoogle} size="large" />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>&copy; 2022 All rights reserved</p>
        <p>English version</p>
      </div>
    </footer>
  );
};

export default Footer;
