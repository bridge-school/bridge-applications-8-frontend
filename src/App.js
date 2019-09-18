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
import ApplicantDashboard from './applicant/applicant-dashboard/applicant-dashboard';
import ApplicantForm from './applicant/applicant-form/applicant-form';
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
            <Redirect exact path="/" to="/admin-dashboard" />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/create-cohort" component={CreateCohort} />
            <Route path="/applicant-dashboard" component={ApplicantDashboard}/>
            <Route path="/apply/:id" component={ApplicantForm} />
            <Route component={NoMatches} />
          </Switch>
        </PageLayoutWithRouter>
      </Router>
    </Provider>
  );
}

export default App;
