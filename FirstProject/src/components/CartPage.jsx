import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {

  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page-content">

          <div className="cart-items-list">
            {cart.map(item => (
              <div key={item.id} className="cart-page-item">

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-page-image"
                />

                <div className="cart-page-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="cart-page-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${getTotalPrice().toFixed(2)}</h2>

            <div className="cart-actions">
              <Link to="/" className="continue-btn">
                Continue Shopping
              </Link>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default CartPage;