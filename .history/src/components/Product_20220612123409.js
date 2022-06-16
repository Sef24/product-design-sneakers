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
          <div className="my-4 w-full">
            <picture>
              <source media="(min-width: 768px )" srcset={hero} />
              <img src={hero} alt="" />
            </picture>
          </div>
          <h3 className="font-semibold text-sm tracking-wider text-orange-400">
            SNEAKER COMPANY
          </h3>
        </section>
      </main>
    </div>
  );
}

export default Product;
