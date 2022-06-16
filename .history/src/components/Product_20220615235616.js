import React, { useState } from "react";
import hero from "../images/image-product-1.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";

function Product() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="">
      <main>
        <section
          className="flex flex-col items-center justify-center  md:grid md:space-x-28 md:mx-10 lg:ml-40 md:grid-cols-2 
        md:place-items-center max-w-7xl md:max-w-5xl  lg:mx-auto md:py-10"
        >
          <div
            className="my-4 w-full carousel slide relative"
            data-bs-ride="carousel"
            id="carouselExampleCaptions"
          >
            <div>
              <div
                id="carouselExampleCaptions"
                class="carousel slide relative"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                  <div className="carousel-item active relative float-left w-full">
                    <img
                      src={product1}
                      className="block w-full md:rounded-xl"
                      alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center"></div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src={product2}
                      className="block w-full md:rounded-xl"
                      alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center"></div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src={product3}
                      className="block w-full md:rounded-xl"
                      alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center"></div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src={product4}
                      className="block w-full md:rounded-xl"
                      alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center"></div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              {/*Lightbox design */}
              <div className="flex space-x-4 my-3 px-2">
                <button className="hover:scale-105">
                  <img src={thumbnail1} alt="" className="rounded-lg  " />
                </button>
                <button className="hover:scale-105">
                  <img src={thumbnail2} alt="" className="rounded-lg " />
                </button>
                <button className="hover:scale-105">
                  <img src={thumbnail3} alt="" className="rounded-lg " />
                </button>
                <button className="hover:scale-105">
                  <img src={thumbnail4} alt="" className="rounded-lg " />
                </button>
              </div>
            </div>
          </div>

          {/* Right Div- Could use Map method if there was more data or API */}
          <article className="px-5 ">
            <h3 className="font-semibold text-sm tracking-wider text-orange-400 md:mt-12">
              SNEAKER COMPANY
            </h3>
            <h1 className="py-2 font-semibold text-3xl tracking-wide">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 tracking-wider text-lg md:mt-8">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center py-2 space-x-5 md:mt-8 ">
              <h1 className="text-3xl font-semibold">$125.00</h1>
              <h3 className="bg-yellow-300 px-4 border-none rounded-lg">50%</h3>
            </div>
            <div
              className="flex space-x-28 md:space-x-20 items-center justify-center my-4
            border-2 rounded-xl py-2 bg-slate-50"
            >
              <button onClick={decrement}>
                <img src={minus} alt="" />
              </button>
              <h1>{count}</h1>
              <button onClick={increment}>
                <img src={plus} alt="" />
              </button>
            </div>
            <div>
              <button
                className="flex items-center justify-center
               my-4 border-2 rounded-xl py-2 px-40 w-full"
              >
                <img src={cart} alt="" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Product;
