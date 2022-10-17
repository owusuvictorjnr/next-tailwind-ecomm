import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    // Product thumpnail
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a className="">
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>

        <p className="mb-2">{product.name} </p>
        <p>&#8373; {product.price}</p>
        <button className="primary-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
