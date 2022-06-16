import React from "react";
import logo from "../images/logo.svg";

function Nav() {
  return (
    <main>
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <h3>Collections</h3>
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </main>
  );
}

export default Nav;
