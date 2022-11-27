import React from "react";

import { setupIonicReact } from "@ionic/react";

import "./theme/tailwind.css";
import "./theme/variables.css";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import { SignUp } from "./pages/signUp";
import { Registration } from "./pages/registration";
import ReservationPage from "./pages/ReservationPage/ReservationPage";

setupIonicReact();

const App: React.FC = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/login">
          <SignUp />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/reservation">
          <ReservationPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
