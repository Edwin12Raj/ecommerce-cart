import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, total, adjustQuantity, removeFromCart, clearCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              adjustQuantity={adjustQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
