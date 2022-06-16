import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/cart.svg";

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
      <div>
        <img src={cart} alt="" />
      </div>
    </main>
  );
}

export default Nav;
