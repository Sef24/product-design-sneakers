import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

function Nav() {
  return (
    <main className="flex items-center justify-between w-full px-24">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="flex space-x-8 mr-32">
        <h3>Collections</h3>
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>

      <section className="flex items-center space-x-7 ">
        <img src={cart} alt="" className="h-5 w-5" />
        <img src={avatar} alt="" className="h-10" />
      </section>
    </main>
  );
}

export default Nav;
