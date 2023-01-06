import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Shop(){
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const items = await data.json();
        setItems(items.data.daily.entries);
    }
    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => {
                return(
                    <Link key={item.items[0].id} to={`/shop/${item.items[0].id}`}>
                        <h1>{item.items[0].name}</h1>
                    </Link>
                )
            })}
        </div>
    );
};
  
export default Shop;