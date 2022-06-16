import React from "react";
import hero from "../images/image-product-1.jpg";
import herothumbnail from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
function Product() {
  return (
    <div className="flex">
      <main>
        <section>
          <picture className="my-4 w-full">
            <img src={hero} alt="" className="" />
          </picture>
        </section>
      </main>
    </div>
  );
}

export default Product;
