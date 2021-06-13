import React from "react";
import { useSelector } from "react-redux";
import {Redirect, useHistory} from "react-router-dom"
import "./style.css";
const Navbar = () => {
 const history = useHistory()
  const data = useSelector((path) => path);

  const { path } = data.inventory;
  const redirect_login = () => {
    if(path === 'Logout'){
      window.location.href = "/"
    }
  }
 
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">Inventory Management</div>
        <div className="navbar__item" onClick={redirect_login} >{path}</div>
      </header>
    </div>
  );
};

export default Navbar;
