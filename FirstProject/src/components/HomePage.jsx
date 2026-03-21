import React from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext'; // ✅ Import

function HomePage({ products, searchTerm }) {

  // ✅ Get from context
  const { addToCart } = useCart();

  // 🔍 Filter products
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">

      {/* 🔎 Search result info */}
      {searchTerm && (
        <p className="search-info">
          Found {filteredProducts.length} product(s)
        </p>
      )}

      {/* ❌ No results */}
      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found</p>
      ) : (
        <ProductList 
          products={filteredProducts}
          onAddToCart={addToCart}  // ✅ From context
        />
      )}

    </div>
  );
}

export default HomePage;