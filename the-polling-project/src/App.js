import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import OnboardingStart1 from "./components/Onboarding1/OnboardingStart1";
import OnboardingStart2 from "./components/Onboarding2/OnboardingStart2";
import OnboardingStart3 from "./components/Onboarding3/OnboardingStart3";

export default () => (
  <Router>
    <Route path="/" exact strict component={HomePage}></Route>
    <Route path="/onboarding" exact strict component={OnboardingStart1}></Route>
    <Route path="/onboarding2" exact strict component={OnboardingStart2}></Route>
    <Route path="/onboarding3" exact strict component={OnboardingStart3}></Route>
  </Router>
)
