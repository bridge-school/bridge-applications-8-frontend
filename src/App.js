import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });

  return (
   <Router>
     <Route path="/" />
   </Router>
  );
}

export default App;
