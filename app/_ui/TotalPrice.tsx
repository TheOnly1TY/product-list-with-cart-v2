import { useProduct } from "@/app/_context/ProductContext";

export function TotalPrice() {
  const { addedProducts } = useProduct();
  const totalPrice = addedProducts.reduce(
    (acc, cur) => cur.price * cur.quantity + acc,
    0
  );
  return (
    <div className="flex justify-between items-center text-dark-brown">
      <h3 className="text-sm text-muted-brown">Order Total</h3>
      <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
    </div>
  );
}
