import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./components/signin/SignIn.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}