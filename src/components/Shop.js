import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/Shop.css';
import Cart from './Cart';

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
            <Cart/>
            <div className='grid'>
                {items.map(item => {
                    return(
                        <Link key={item.itemId} to={`/shop/${item.itemId}`} className="flex">
                            <img src={`${item.item.images.icon}`} alt="Fortnite Item" className='small-img'/>
                            <h1>{item.item.name}</h1>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};
  
export default Shop;