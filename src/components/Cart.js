import React, { useState, useEffect } from 'react';

function Cart(props) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const calculatePrice = () => {
      const items = [...cart];
      let total = 0;
      for(let i = 0; i < items.length; i++){
        total += items[i];
      }
      return total;
    }

    setTotal(calculatePrice());
    return (
      <div className="cart">
          <h1>Shopping Cart</h1>
          {cart.map(item => {
                return(
                <h1>{item.name}</h1>
                )
            })}
          <h1>Subtotal</h1>
          <div>{total}</div>
          <h1>Total</h1>
          <div>
            <div>Subtotal: {total}</div>
            <div>Tax: {total * 0.08875}</div>
            <div>-----------</div>
            <div>Total: {total * 1.08875}</div>
          </div>
      </div>
    );
  }

export default Cart;
