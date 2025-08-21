"use client";

import Image from "next/image";
import { EmptyCart } from "@/app/_components/EmptyCart";
import { useProduct } from "../_context/ProductContext";
import { TotalPrice } from "@/app/_ui/TotalPrice";
import { CartProduct } from "./CartProduct";
import { Button } from "@/app/_ui/Button";

export function Cart() {
  const { addedProducts, setIsModalOpen } = useProduct();

  const totalItemsInCart = addedProducts.reduce(
    (acc, cur) => cur.quantity + acc,
    0
  );

  return (
    <div className="w-full lg:w-96 min-h-[299px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-white p-6 rounded-xl">
      <h3 className="text-2xl text-vibrant-orange font-bold mb-6">
        Your Cart ({totalItemsInCart})
      </h3>
      {addedProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <ul>
            {addedProducts.map((product, id) => (
              <CartProduct product={product} key={id} />
            ))}
          </ul>
          <TotalPrice />
          <div className="relative flex justify-center items-center gap-1.5 w-full bg-background text-center p-4 rounded-lg my-6">
            <Image
              src="/images/icon-carbon-neutral.svg"
              width={20}
              height={20}
              alt="tree-icon"
              className="object-cover"
            />
            <p className="text-sm text-dark-brown">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <Button action={() => setIsModalOpen(true)}>Confirm Order</Button>
        </div>
      )}
    </div>
  );
}
