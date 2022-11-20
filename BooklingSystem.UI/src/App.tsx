import React from "react";

import { setupIonicReact } from "@ionic/react";

import "./theme/tailwind.css";
import "./theme/variables.css";

import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

setupIonicReact();

const App: React.FC = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
