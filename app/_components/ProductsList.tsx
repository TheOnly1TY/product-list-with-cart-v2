import ProductLists from "@/app/_libs/data.json";
import { ProductItem } from "@/app/_components/ProductItem";

export function ProductsList() {
  return (
    <div className="lg:mr-8 md:mb-8 mb-8">
      <h1 className="text-[2.5rem] text-dark-brown font-bold leading-[120%] mb-8">
        Desserts
      </h1>
      <ul className="grid justify-center md:grid-cols-3 gap-x-6 gap-y-8">
        {ProductLists.map((product, id) => (
          <ProductItem key={id} product={product} />
        ))}
      </ul>
    </div>
  );
}
