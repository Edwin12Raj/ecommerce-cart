import React from 'react';

const CartItem = ({ item, adjustQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => adjustQuantity(item.id, -1)}>-</button>
      <button onClick={() => adjustQuantity(item.id, 1)}>+</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
