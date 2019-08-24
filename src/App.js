import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import Dashboard from './dashboard/dashboard';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  return (
   <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
   </Router>
  );
}

export default App;
