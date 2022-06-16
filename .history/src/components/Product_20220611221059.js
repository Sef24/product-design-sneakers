import React from "react";
import hero from "../images/image-product-1.jpg";
import herothumbnail from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
function Product() {
  return (
    <div className="">
      <main className="w-full flex mx-44 mt-24 space-x-28">
        <section>
          <img src={hero} alt="" className="h-96 rounded-xl " />

          <div className="flex h-20 mt-8 space-x-5">
            <img src={herothumbnail} alt="" className="rounded-xl" />
            <img src={thumbnail2} alt="" className="rounded-xl" />
            <img src={thumbnail3} alt="" className="rounded-xl" />
            <img src={thumbnail4} alt="" className="rounded-xl" />
          </div>
        </section>
      </main>
      <section className="mt-16">
        <div className=" text-orange-400 font-semibold tracking-widest text-sm">
          <h1>SNEAKER COMPANY</h1>
        </div>
        <div className="">
          <h1 className=" text-5xl">Fall Limited Edition Sneakers</h1>
        </div>
      </section>
    </div>
  );
}

export default Product;
