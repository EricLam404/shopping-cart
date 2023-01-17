import React, { useState, useEffect } from 'react';

function Cart(props) {
    const [cart, setCart] = useState([]);

    const calculatePrice = () => {
      const items = [...cart];
      let total = 0;
      for(let i = 0; i < items.length; i++){
        total += items[i];
      }
      return total;
    }
    return (
      <div className="cart">
          <h1>Shopping Cart</h1>
          {cart.map(item => {
                return(
                <h1>{item.name}</h1>
                )
            })}
          <h1>Total</h1>
          <div>{calculatePrice()}</div>
      </div>
    );
  }

export default Cart;
