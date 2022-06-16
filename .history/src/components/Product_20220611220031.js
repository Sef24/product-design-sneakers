import React from "react";
import hero from "../images/image-product-1.jpg";
import herothumbnail from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
function Product() {
  return (
    <main>
      <section className="mx-40 mt-24">
        <img src={hero} alt="" className="h-96 rounded-xl " />

        <div className="flex h-24 mt-10">
          <img src={herothumbnail} alt="" className="rounded-lg" />
          <img src={thumbnail2} alt="" className="rounded-lg" />
          <img src={thumbnail3} alt="" className="rounded-lg" />
          <img src={thumbnail4} alt="" className="rounded-lg" />
        </div>
      </section>
    </main>
  );
}

export default Product;
