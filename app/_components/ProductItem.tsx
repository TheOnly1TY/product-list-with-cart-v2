"use client";

import Image from "next/image";
import { AddedProductType, useProduct } from "@/app/_context/ProductContext";
import increaseIcon from "@/public/images/icon-increment-quantity.svg";
import decreaseIcon from "@/public/images/icon-decrement-quantity.svg";
import { ProductListType } from "@/app/types";

type Product = {
  product: ProductListType;
};

export function ProductItem({ product }: Product) {
  const { image, name, category, price } = product;
  const {
    addedProducts,
    handleAddProduct,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useProduct();
  const inCart = addedProducts.find(
    (addedProduct: AddedProductType) => addedProduct.name === product.name
  );

  return (
    <li>
      <div className="relative mb-12">
        <picture>
          <source media="(max-width: 778px)" srcSet={image.mobile} />
          <source media="(max-width: 1023px)" srcSet={image.tablet} />
          <img
            src={image.desktop}
            alt="product"
            className={`w-full lg:max-w-[250px] rounded-lg ${
              inCart ? "border-2 border-vibrant-orange" : ""
            }`}
          />
        </picture>

        <button
          className={`group absolute top-full left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    w-40 h-11 flex items-center gap-1 rounded-full 
                    transition-all duration-150 ease-in-out cursor-pointer
                   ${
                     inCart
                       ? "justify-between bg-vibrant-orange px-4"
                       : "justify-center border border-muted-brown bg-white hover:border-vibrant-orange active:border-vibrant-orange"
                   }`}
          onClick={() => handleAddProduct(product)}
        >
          {inCart ? (
            <>
              <span
                className="flex justify-center items-center w-5 h-5 border border-white rounded-full cursor-pointer"
                onClick={() => handleDecreaseQuantity(product.name)}
              >
                <Image src={decreaseIcon} alt="decrease icon" />
              </span>

              <p className="text-sm text-white font-medium">
                {inCart?.quantity}
              </p>

              <span
                className="flex justify-center items-center w-5 h-5 border border-white rounded-full cursor-pointer"
                onClick={() => handleIncreaseQuantity(product.name)}
              >
                <Image src={increaseIcon} alt="increase icon" />
              </span>
            </>
          ) : (
            <>
              <Image
                src="/images/icon-add-to-cart.svg"
                width={20}
                height={20}
                alt="cart_icon"
              />
              <span className=" transition-all duration-150 ease-in-out text-sm text-dark-brown group-hover:text-vibrant-orange font-semibold">
                Add to Cart
              </span>
            </>
          )}
        </button>
      </div>

      <h3 className="text-sm text-muted-brown">{category}</h3>
      <h2 className="text-base text-dark-brown font-semibold">{name}</h2>
      <p className="text-base text-vibrant-orange font-semibold">
        ${price.toFixed(2)}
      </p>
    </li>
  );
}
