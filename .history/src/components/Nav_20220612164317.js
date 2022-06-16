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
        <div class="w-60 h-full shadow-md bg-white px-1 absolute">
          <ul class="relative">
            <li class="relative">
              <a
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 1
              </a>
            </li>
            <li class="relative">
              <a
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 2
              </a>
            </li>
            <li class="relative">
              <a
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Sidenav link 2
              </a>
            </li>
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
