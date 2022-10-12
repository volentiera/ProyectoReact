

import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../../context/ItemsContext';
import ItemDetail from './ItemDetail';
import ItemDetailError from './ItemDetailError';
import ItemDetailLoader from './ItemDetailLoader';



const ItemDetailContainer = () => {
  const {item, checkEmpty, setIdItem} = useContext(ItemsContext)
  
  const { idItem } = useParams();

  useEffect(() => {
    setIdItem(idItem)
  }, []);
  
        return (
          <div>
            {item === null && <ItemDetailLoader/>} 
            {(checkEmpty() === false) ? <ItemDetail item={item}/> : (checkEmpty() !== undefined) && <ItemDetailError/>}
          </div>
      )
      

};

export default ItemDetailContainer;