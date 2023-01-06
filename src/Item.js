import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function Item() {
    useEffect(() => {
        fetchItems();
    }, []);

    const { id } = useParams();
    const [item, setItem] = useState({data: {item: ''}});
    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
        const item = await data.json();
        console.log(item.data.name)
        setItem(item);
    }

    return (
      <div className="item">
          <h1>{item.data.name}</h1>
      </div>
    );
  }

export default Item;
