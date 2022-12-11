import React from "react";

import { setupIonicReact } from "@ionic/react";

import "./localization/i18n";

import "./theme/tailwind.css";
import "./theme/variables.css";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "./pages/InputPages/signUp";
import { Registration } from "./pages/InputPages/registration";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import { UserPanel } from "./pages/UserPanel/UserPanel";
import { useCookies } from "react-cookie";

setupIonicReact();

const App: React.FC = () => {
  const [cookies] = useCookies(["loginData"]);

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <SignUp />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>

          <Route path="/reservation">
            <ReservationPage />
          </Route>

          {cookies.loginData && (
            <Route path="/userpanel">
              <UserPanel />
            </Route>
          )}

          <Route>
            <div>Not found</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
