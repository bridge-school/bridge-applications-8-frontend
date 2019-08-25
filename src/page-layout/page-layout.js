import React from "react";
import Header from '../header/header';
import "./page-layout.css";

const PageLayout = ({children}) => {
  return(
    <div className="app-container">
      <Header title='placeholder title' />
      <div className="main-content-container">
        {children}
      </div>
    </div>
  )
}

export default PageLayout;