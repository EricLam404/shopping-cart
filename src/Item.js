import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';

function Item(props) {
    useEffect(() => {
        fetchItems();
    }, []);

    const { id } = useParams();
    const [cost, setCost] = useState(0);
    const [item, setItem] = useState({
        data: {
            item: '',
            images: {icon: ""}
        }
    });
    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
        const item = await data.json();
        console.log(item)
        setItem(item);
    }

    return (
      <div className="item">
          <h1>{item.data.name}</h1>
          <img src={`${item.data.images.icon}`} alt="Fortnite Item"/>
          <div>{cost}</div>
      </div>
    );
  }

export default Item;
