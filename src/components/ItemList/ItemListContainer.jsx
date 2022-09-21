import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { idCategory } = useParams()

  const results = items.filter(ele => ele.tipo === `${idCategory}`)

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
      {idCategory !== undefined ? <ItemList items={results}/>: <ItemList items={items}/> }
    </div>
  );
};

export default ItemListContainer;
