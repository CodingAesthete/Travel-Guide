import React from "react";
import Globus from "../img/globus.png"

function Header() {
  return (
    <header>
      <div className="header-img-container">
        <img src={Globus} alt="globus-photo" />
      </div>
      <h1 className="title">My Travel Journal</h1>
    </header>
  )
}

export default Header;