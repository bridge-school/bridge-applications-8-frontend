import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect, 
  withRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AdminDashboard from "./admin/admin-dashboard/admin-dashboard";
import CreateCohort from "./admin/create-cohort/create-cohort";
// import LandingPage from "./common/landing-page/landing-page";
import NoMatches from "./common/no-matches/no-matches";
import PageLayout from "./common/page-layout/page-layout";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  const PageLayoutWithRouter = withRouter(props => <PageLayout {...props} />);
  
  return (
    <Provider store={store}>
      <Router>
        <PageLayoutWithRouter >
          <Switch>
            <Redirect exact path="/" to="/dashboard" />
            <Route path="/dashboard" component={AdminDashboard} />
            <Route path="/create-cohort" component={CreateCohort} />
            <Route component={NoMatches} />
          </Switch>
        </PageLayoutWithRouter>
      </Router>
    </Provider>
  );
}

export default App;
