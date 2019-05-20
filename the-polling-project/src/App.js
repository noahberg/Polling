import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import OnboardingStart1 from "./components/Onboarding1/OnboardingStart1";

export default () => (
  <Router>
    <Route path="/" exact strict component={HomePage}></Route>
    <Route path="/onboarding" exact strict component={OnboardingStart1}></Route>
  </Router>
)
