import React, { useState, useEffect } from 'react';
import "../css/Cart.css"

function Cart(props) {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleCartClick = () => {
      setShowCart(!showCart);
    }

    const handleAddToCart = (item) => {
      setCart([...cart, item]);
    }

    const calculatePrice = () => {
      const items = [...cart];
      let total = 0;
      for(let i = 0; i < items.length; i++){
        total += items[i];
      }
      return total;
    }

    //setTotal(calculatePrice());

    return (
      <div className="cart-container">
            <img src="./imgs/cart.svg" onClick={handleCartClick} className="cart-icon" alt="Cart"/>
            { showCart && (
                <div className="cart-items-container">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.img} className="cart-item-img" alt="item"/>
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">{item.price}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
  }

export default Cart;
