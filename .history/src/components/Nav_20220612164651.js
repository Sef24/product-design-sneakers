import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";

function Nav() {
  return (
    <main className=" px-5 lg:border-b-2 border-gray-300 lg:pb-8 lg:mx-32 ">
      <section className="flex items-center justify-between pt-7 ">
        <div className="flex items-center space-x-3">
          <img src={menu} alt="" className="h-4 lg:hidden" />
          <img
            src={logo}
            alt=""
            className="h-5 flex items-center justify-between"
          />
        </div>
        <div className="nav-container show-container">
          <ul className="flex">
            <li className="cursor-pointer hover:underline">Collections</li>
            <li className="cursor-pointer hover:underline">Men</li>
            <li className="cursor-pointer hover:underline">Women</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>

        <section className="flex items-center space-x-6   ">
          <img src={cart} alt="" className="h-5 w-5" />
          <img src={avatar} alt="" className="h-8" />
        </section>
      </section>
    </main>
  );
}

export default Nav;
