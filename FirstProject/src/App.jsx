import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';
import CartSidebar from './components/CartSidebar';


function App() {
  // ✅ Cart state
  const [cart, setCart] = useState([]);

  // ✅ Cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Add to cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product);

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // Increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove item
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // ✅ Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // ✅ Toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // ✅ Total items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">
      {/* Pass cart count + toggle */}
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={toggleCart}
      />

      <main className="main-content">
        {/* ✅ Step 3: Pass addToCart */}
        <ProductList 
          products={products} 
          onAddToCart={addToCart}
        />
      </main>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;