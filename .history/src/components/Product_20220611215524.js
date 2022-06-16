import React from "react";
import hero from "../images/image-product-1.jpg";
import herothumbnail from "../images/image-product-1-thumbnail.jpg";

function Product() {
  return (
    <main>
      <section className="mx-40 mt-24">
        <img src={hero} alt="" className="h-96 rounded-xl " />

        <div>
          <img src={herothumbnail} alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
    </main>
  );
}

export default Product;
