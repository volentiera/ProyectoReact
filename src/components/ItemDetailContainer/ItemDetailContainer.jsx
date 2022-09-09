import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const { idItem } = useParams()

    const getItems = async () => {
        try {
            const response = await fetch(
            `https://62e2a4b4b54fc209b87dbcaf.mockapi.io/catalogoProductos`
            );
            const data = await response.json();
            setItems(data[parseInt(idItem) - 1]);
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        getItems();
        
      }, []);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
};

export default ItemDetailContainer;