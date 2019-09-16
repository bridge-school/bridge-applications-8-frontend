import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AdminDashboard from "./admin/admin-dashboard/admin-dashboard";
import CreateCohort from "./admin/create-cohort/create-cohort";
import NoMatches from "./common/no-matches/no-matches";
import PageLayout from "./common/page-layout/page-layout";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route path="/create-cohort" component={CreateCohort} />
          <Route component={NoMatches} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
