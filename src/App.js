import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminDashboard from './admin/admin-dashboard/admin-dashboard';
import CreateCohort from './admin/create-cohort/create-cohort';
import LandingPage from './common/landing-page/landing-page';
import NoMatches from './common/no-matches/no-matches';
import PageLayout from './common/page-layout/page-layout';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("cohorts");
    };
    fetchData();
  });

  return (
    <Router>
      <PageLayout >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route path="/create-cohort" component={CreateCohort} />
          <Route component={NoMatches} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
