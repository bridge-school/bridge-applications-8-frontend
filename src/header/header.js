import React from "react";
import "./header.css";
import logo from "../images/bridge-logo.svg";

const Header = ({title}) => {
  return(
    <header className="app-header">
      <div className="app-header-aligner">
        <a href="/" className='app-logo'>
          <img src={logo} alt="bridge logo"/>
        </a>
        <h1 className="app-title">{title}</h1>
      </div>
    </header>
  )
}

export default Header;