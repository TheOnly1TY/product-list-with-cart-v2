"use client";
import Image from "next/image";
import { AddedProductType, useProduct } from "../_context/ProductContext";

type CartProductType = {
  product: AddedProductType;
};

export function CartProduct({ product }: CartProductType) {
  const { deleteProduct } = useProduct();
  const totalPricePerProduct = product.quantity * product.price;
  return (
    <li>
      <div className="flex justify-between items-center text-sm font-semibold">
        <div className="flex flex-col gap-2">
          <h3 className="text-dark-brown">{product.name}</h3>
          <div className="flex gap-4">
            <p className="text-vibrant-orange">{product.quantity}x</p>
            <p className="text-muted-brown font-normal mr-1">
              @${product.price.toFixed(2)}{" "}
              <span className="font-semibold">
                ${totalPricePerProduct.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-5 h-5 border border-muted-brown rounded-full cursor-pointer"
          onClick={() => deleteProduct(product.name)}
        >
          <Image
            src="/images/icon-remove-item.svg"
            width={8.75}
            height={8.75}
            alt="remove icon"
          />
        </div>
      </div>{" "}
      <div className="w-full h-[1.5px] bg-background my-4"></div>
    </li>
  );
}
