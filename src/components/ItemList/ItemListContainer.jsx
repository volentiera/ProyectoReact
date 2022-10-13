import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { ItemsContext } from "../../context/ItemsContext";
import ItemListLoader from "./ItemListLoader";

const ItemListContainer = () => {
  const { items, results, setIdCategory } = useContext(ItemsContext);
  const { idCategory } = useParams();

  //uso state para modificar el estado del useparams dentro del context
  useEffect(() => {
    setIdCategory(idCategory);
  }, [idCategory]);

  const checkEmpty = () => {
    if (items !== null) {
      let isEmpty = Object.keys(items).length === 0;
      return isEmpty;
    }
  };
  const checkEmptyResults = () => {
    if (results !== null) {
      let isEmptyResults = Object.keys(results).length === 0;
      return isEmptyResults;
    }
  };
  return (
    <div>
      {checkEmpty() !== false && <ItemListLoader />}
      {(idCategory !== undefined) && (checkEmptyResults() !== true) ? (
        <ItemList items={results} />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
