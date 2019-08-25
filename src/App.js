import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import AdminDashboard from './admin-dashboard/admin-dashboard';
import NoMatches from './no-matches/no-matches';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route component={NoMatches} />
      </Switch>
   </Router>
  );
}

export default App;
