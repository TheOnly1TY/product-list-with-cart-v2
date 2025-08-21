"use client";

import Image from "next/image";
import { useProduct } from "@/app/_context/ProductContext";
import { TotalPrice } from "@/app/_ui/TotalPrice";
import { Button } from "@/app/_ui/Button";

export function Modal() {
  const { addedProducts, setIsModalOpen, setAddedProducts } = useProduct();

  const sendOrder = () => {
    setAddedProducts([]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="md:max-w-[592px] w-full fixed bottom-0 left-0 right-0 md:bottom-auto md:right-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-xl px-6 py-10 md:p-10 z-10">
        <Image
          src="/images/icon-order-confirmed.svg"
          width={42}
          height={42}
          alt="confirm icon"
        />
        <h2 className="text-[2.5rem] text-dark-brown leading-[120%] font-bold mt-6 md:mb-2 md:mt-6">
          Order Confirmed
        </h2>
        <p className="text-base text-muted-brown">
          We hope you enjoy your food!
        </p>
        <ul className="bg-background p-6 rounded-lg my-8">
          <div className="max-h-[250px] md:max-h-[150px] overflow-y-scroll">
            {addedProducts.map((product, id) => (
              <li key={id}>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center gap-4">
                    <Image
                      src={product.image.thumbnail}
                      width={48}
                      height={48}
                      className="rounded-sm"
                      alt={`${product.name}_thumbnail`}
                    />
                    <div className="flex justify-between flex-col">
                      <h3 className="text-sm text-dark-brown font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-sm font-bold text-vibrant-orange">
                        {product.quantity}x{" "}
                        <span className="text-muted-brown font-normal ml-4">
                          @ ${product.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-dark-brown font-semibold">
                    ${(product.quantity * product.price).toFixed(2)}
                  </p>
                </div>
                <div className="w-full h-[1.5px] bg-off-white my-4"></div>
              </li>
            ))}
          </div>
          <TotalPrice />
        </ul>
        <Button action={sendOrder}>Start New Order</Button>
      </div>
      <div
        className="fixed inset-0 bg-black/50 transition-all duration-1000 ease-in-out"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </div>
  );
}
