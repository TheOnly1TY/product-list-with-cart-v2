"use client";

import { ProductsList } from "@/app/_components/ProductsList";
import { Cart } from "@/app/_components/Cart";
import { Modal } from "@/app/_components/Modal";
import { useProduct } from "@/app/_context/ProductContext";

export default function Home() {
  const { isModalOpen } = useProduct();
  return (
    <div className="relative flex justify-center flex-col lg:items-start lg:flex-row lg:my-[88px] md:m-10 m-6 md:px-0">
      <ProductsList />
      <Cart />
      {isModalOpen && <Modal />}
    </div>
  );
}
