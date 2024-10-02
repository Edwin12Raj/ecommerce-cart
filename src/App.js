import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 50, image: 'https://1.img-dpreview.com/files/p/E~C0x0S680x680T1200x1200~articles/9504161465/xiaomi_sq.png' },
    { id: 2, name: 'Product 2', price: 100, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-160143/Google-Pixel-8-featured-image-packshot-review-Recovered.jpg' },
    { id: 3, name: 'Product 3', price: 150, image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8-burgundy-red.jpg' },
  ];

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Calculate total cost when the cart changes
  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Adjust quantity
  const adjustQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <h1>E-commerce Cart Management System</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart 
        cart={cart} 
        total={total} 
        adjustQuantity={adjustQuantity} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
      />
    </div>
  );
}

export default App;
