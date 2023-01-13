import React, { useState, useEffect } from 'react';

function Cart(props) {
    const [cart, setCart] = useState([]);
    return (
      <div className="cart">
          <h1>Shopping Cart</h1>
          {cart.map(item => {
                return(
                <h1>{item.name}</h1>
                )
            })}
      </div>
    );
  }

export default Cart;
