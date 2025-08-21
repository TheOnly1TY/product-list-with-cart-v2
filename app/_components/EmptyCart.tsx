import Image from "next/image";

export function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/images/illustration-empty-cart.svg"
        width={121.03}
        height={101.41}
        className="mb-6"
        alt="illustration-empty-cart"
      />

      <p className="text-sm text-muted-brown">
        Your added items will appear here
      </p>
    </div>
  );
}
