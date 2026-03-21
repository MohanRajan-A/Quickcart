import React from 'react';
import { useParams, Link } from 'react-router-dom'; // ✅ Add Link
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function CategoryPage({ products }) {

  const { category } = useParams();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  // 💡 Format category name nicely
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="category-page">

      <h2 className="category-title">
        {formattedCategory} Products
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>

          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList 
          products={filteredProducts}
          onAddToCart={addToCart}
        />
      )}

    </div>
  );
}

export default CategoryPage;