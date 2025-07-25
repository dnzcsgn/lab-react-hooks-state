import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

const ProductList = ({ category, addToCart }) => {
  const filteredProducts =
    category === "all"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available</p> // ✅ This is what the test expects
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
