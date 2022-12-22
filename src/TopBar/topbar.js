import React from "react";
import { Component } from "react"; 
import logo1 from './amazone-logo.png';
import classes from './topbar.module.css';
const TopBar = () => {
    return(
        <nav className={classes.TopBar}>
        <img src={logo1} className="App-logo" alt="logo" />
        </nav>
    )
}

export default TopBar;
