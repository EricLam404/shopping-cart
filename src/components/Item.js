import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartItems';
import '../css/Item.css';

function Item() {
    useEffect(() => {
        fetchItems();
    }, []);

    const { id } = useParams();
    const [item, setItem] = useState({
        name: "",
        images: {icon: ""},
        cost: 0
    });

    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        const item = await data.json();
        setItem(item.data.item);
    }

    const {cart, handleAddToCart} = useContext(CartContext);
    
    return (
      <div className="item">
            <h1 className="name">{item.name}</h1>
            <img src={`${item.images.icon}`} alt="Fortnite Item" className="item-img"/>
            <div className="cost">{item.cost} v-bucks</div>
            <button className="add-to-cart-button" onClick={() => {handleAddToCart({ name: item.name, img: item.images.icon, cost: item.cost })}}>Add to Cart</button>
      </div>
    );
  }

export default Item;
