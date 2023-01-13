import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';

function Item(props) {
    useEffect(() => {
        fetchItems();
    }, []);

    const { id } = useParams();
    const [item, setItem] = useState({
        name: "",
        images: {icon: ""}
    });
    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        const item = await data.json();
        console.log(item.data.item);
        setItem(item.data.item);
    }

    return (
      <div className="item">
          <h1>{item.name}</h1>
          <img src={`${item.images.icon}`} alt="Fortnite Item"/>
          <div>{item.cost}</div>
      </div>
    );
  }

export default Item;
