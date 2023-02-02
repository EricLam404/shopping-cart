import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={{ cart, handleAddToCart }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
