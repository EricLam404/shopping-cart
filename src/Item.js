import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function Item() {
    useEffect(() => {
    }, []);

    const { id } = useParams();
    const [item, setItem] = useState({});

    console.log(id);

    return (
      <div className="item">
          <h1>Item</h1>
      </div>
    );
  }

export default Item;
