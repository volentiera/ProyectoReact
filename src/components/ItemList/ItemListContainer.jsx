import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { ItemsContext } from "../../context/ItemsContext";


const ItemListContainer = () => {
  const { items, results, setIdCategory} = useContext(ItemsContext)
  const { idCategory } = useParams();

  useEffect(() => {
    setIdCategory(idCategory)
  }, [idCategory]);

  return (
    <div>
      {idCategory !== undefined ? <ItemList items={results}/>: <ItemList items={items}/> }
    </div>
  );
};

export default ItemListContainer;
