"use client";

import { createContext, useContext, useState } from "react";
import { ProductListType } from "../types";

export type AddedProductType = ProductListType & {
  quantity: number;
};

type ProductContextType = {
  addedProducts: AddedProductType[];
  isModalOpen: boolean;
  setAddedProducts: React.Dispatch<React.SetStateAction<AddedProductType[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDecreaseQuantity: (currentProductName: string) => void;
  handleIncreaseQuantity: (currentProductName: string) => void;
  handleAddProduct: (selectedProduct: ProductListType) => void;
  deleteProduct: (currentProductName: string) => void;
};

type ProductProviderType = {
  children: React.ReactNode;
};

const productContext = createContext<ProductContextType | null>(null);

function ProductProvider({ children }: ProductProviderType) {
  const [addedProducts, setAddedProducts] = useState<AddedProductType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddProduct = (selectedProduct: ProductListType) => {
    const existingProducts = addedProducts.find(
      (addedProduct: AddedProductType) =>
        addedProduct.name === selectedProduct.name
    );
    if (existingProducts) return;

    setAddedProducts([...addedProducts, { ...selectedProduct, quantity: 1 }]);
  };

  const deleteProduct = (currentProductName: string) => {
    setAddedProducts((existingproduct) =>
      existingproduct.filter((product) => product.name !== currentProductName)
    );
  };

  const handleDecreaseQuantity = (currentProductName: string): void => {
    const existingProducts = addedProducts.find(
      (prod: AddedProductType) => prod.name === currentProductName
    );
    if ((existingProducts?.quantity ?? 1) <= 1) {
      deleteProduct(currentProductName);
    } else {
      setAddedProducts((product) =>
        product.map((p) =>
          p.name === currentProductName
            ? { ...p, quantity: (p.quantity || 1) - 1 }
            : p
        )
      );
    }
  };

  const handleIncreaseQuantity = (currentProductName: string): void => {
    setAddedProducts((product) =>
      product.map((p) =>
        p.name === currentProductName
          ? { ...p, quantity: (p.quantity || 1) + 1 }
          : p
      )
    );
  };

  return (
    <productContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
        handleAddProduct,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        deleteProduct,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

function useProduct() {
  const context = useContext(productContext);

  if (!context)
    throw new Error("productContext must be within a productProvider");

  return context;
}

export { ProductProvider, useProduct };
