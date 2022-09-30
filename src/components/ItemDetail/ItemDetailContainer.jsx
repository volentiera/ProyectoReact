
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemDetailError from './ItemDetailError';
import ItemDetailLoader from './ItemDetailLoader';



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
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
            }else {
              setItem({})
            }
          })
        }
        
      }, [idItem]);

      const algo = () =>{
        if (item !== null){
          const isEmpty = Object.keys(item).length === 0
          return isEmpty
        }
      }
      console.log(algo())
        return (
          <div>
            {item === null && <ItemDetailLoader/>} 
            {algo() === false  ? <ItemDetail item={item}/>: <ItemDetailError/>}
          </div>
      )
      

};

export default ItemDetailContainer;