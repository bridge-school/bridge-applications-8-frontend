import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './common/landing-page/landing-page';
import AdminDashboard from './admin/admin-dashboard/admin-dashboard';
import NoMatches from './common/no-matches/no-matches';
import PageLayout from './common/page-layout/page-layout'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  return (
    <Router>
      <PageLayout >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route component={NoMatches} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
