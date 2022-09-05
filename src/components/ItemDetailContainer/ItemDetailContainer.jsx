import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        try {
            const response = await fetch(
            `https://62e2a4b4b54fc209b87dbcaf.mockapi.io/catalogoProductos`
            );
            const data = await response.json();
            setItems(data);
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        getItems();
        
      }, []);
    return (
        <div>
            {items && <ItemDetail items={items}/>}
        </div>
    );
};

export default ItemDetailContainer;