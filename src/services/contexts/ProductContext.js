import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function deleteProduct(prodId) {
    setProducts(products.filter((product) => product.id !== prodId));
  }

  function handleLikeClick(prodId) {
    const updatedProducts = products.map((product) => {
      if (product.id === prodId) {
        return {
          ...product,
          likes: product.likes + 1,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, handleLikeClick }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
