
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemDetailError from './ItemDetailError';
import ItemDetailLoader from './ItemDetailLoader';



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { idItem } = useParams()


      useEffect(() => {
        if (idItem){
          const db = getFirestore()
          const itemRef = doc(db, "items" ,idItem)
          getDoc(itemRef).then((snapshot) =>{
            if (snapshot.exists()){
              const newItem = {
                id: snapshot.id,
                ...snapshot.data()
              }
              setItem(newItem)
            }
          })
        }

      }, [idItem]);
      const isEmpty = Object.keys(item).length === 0
      
        return (
          <div>
            {isEmpty === true && <ItemDetailLoader/>} 
            {isEmpty === false ? <ItemDetail item={item}/>: <ItemDetailError/>} 
          </div>
      )
      

};

export default ItemDetailContainer;