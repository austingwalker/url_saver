import React from "react";
import { Link } from "react-router-dom";
import {Row, Col, Navbar } from 'reactstrap';
import "./Nav.css"

const Nav = () => (
  <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="/">
      URL_Saver
    </a>
    <Link className="btn btn-link ml-auto allFilesBtn" to="/files">View All URL Files</Link>
  </nav>
);

export default Nav;
