import React from "react";
import "./header.css";
import logo from "../images/bridge-logo.svg";

const Header = ({title}) => {
  return(
    <header className="app-header">
      <div className="app-header-aligner">
        <img src={logo} className="bridge-logo" alt="bridge logo"/>
        <h1 className='page-title'>{title}</h1>
      </div>
    </header>
  )
}

export default Header;