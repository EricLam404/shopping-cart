import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Shop(){
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();
        setItems(items.data);
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => {
                return(
                    <Link key={item.itemId} to={`/shop/${item.itemId}`}>
                        <h1>{item.item.name}</h1>
                    </Link>
                )
            })}
        </div>
    );
};
  
export default Shop;