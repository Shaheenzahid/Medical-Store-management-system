import React  from "react";
import '../css/navigationBar.css'
import logo from '../images/hmlogo.png';

function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} alt="Logo" className="navbar-logo" />HM PHARMACY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/supplyManager">Supply Manager</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactUs">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs" >About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;