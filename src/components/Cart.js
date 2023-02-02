import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartItems';
import "../css/Cart.css"

function Cart(props) {
    const [showCart, setShowCart] = useState(false);
    const {cart, handleAddToCart} = useContext(CartContext);

    const handleCartClick = () => {
      setShowCart(!showCart);
    }

    const calculatePrice = () => {
      const items = [...cart];
      let total = 0;
      for(let i = 0; i < items.length; i++){
        total += items[i].cost;
      }
      return total;
    }

    const total = calculatePrice();

    return (
      <div className="cart-container">
        <div onClick={handleCartClick} className="cart-icon">Cart</div>
          { showCart && (
          <div className="cart-items-container">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} className="cart-item-img" alt="item"/>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.cost}</span>
              </div>
            ))}
            <div className='cart-total'>Total: {total}</div>
          </div>
          )}
        </div>
    );
  }

export default Cart;
