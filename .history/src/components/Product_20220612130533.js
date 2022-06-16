import React from "react";
import hero from "../images/image-product-1.jpg";
import herothumbnail from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
function Product() {
  return (
    <div className="">
      <main>
        <section
          className="flex flex-col-reverse md:grid md:gap-20 md:grid-cols-2 
        md:place-items-center max-w-4xl lg:w-full md:mx-auto md:py-10"
        >
          <div className="my-4 w-full">
            <picture>
              <source media="(min-width: 768px )" srcset={hero} />
              <img src={hero} alt="" />
            </picture>
          </div>
          <article className="px-5">
            <h3 className="font-semibold text-sm tracking-wider text-orange-400">
              SNEAKER COMPANY
            </h3>
            <h1 className="py-4 font-semibold text-3xl tracking-wide">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 tracking-wider text-lg">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center py-4 space-x-5 ">
              <h1 className="text-3xl font-semibold">$125.00</h1>
              <h3>50%</h3>
              <div>
                <h3>$250.00</h3>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Product;
