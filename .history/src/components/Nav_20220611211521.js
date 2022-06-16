import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

function Nav() {
  return (
    <main className="flex items-center justify-between w-full px-5">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="flex">
        <h3>Collections</h3>
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>

      <section className="flex space-x-3">
        <img src={cart} alt="" />
        <img src={avatar} alt="" />
      </section>
    </main>
  );
}

export default Nav;
