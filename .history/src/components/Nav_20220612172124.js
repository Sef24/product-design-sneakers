import React, { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className=" px-5 lg:border-b-2 border-gray-300 lg:pb-8 lg:mx-32 ">
      <section className="flex items-center justify-between pt-7 ">
        <div className="flex items-center space-x-3">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <img src={menu} alt="" className="h-4 lg:hidden" />
          </button>
          <img
            src={logo}
            alt=""
            className="h-5 flex items-center justify-between"
          />
        </div>
        <div className="nav-container show-container space-y-4">
          <div className="ml-5">
            <img src={close} alt="" className="h-5" />
            <ul className="space-y-4 mt-10">
              <li className="cursor-pointer hover:underline font-bold text-xl">
                Collections
              </li>
              <li className="cursor-pointer hover:underline font-bold text-xl">
                Men
              </li>
              <li className="cursor-pointer hover:underline font-bold text-xl">
                Women
              </li>
              <li className="cursor-pointer hover:underline font-bold text-xl">
                About
              </li>
              <li className="cursor-pointer hover:underline font-bold text-xl">
                Contact
              </li>
            </ul>
          </div>
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
