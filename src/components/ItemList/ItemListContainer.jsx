import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore , getDocs, collection } from "firebase/firestore"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { idCategory } = useParams()

  const results = items.filter(ele => ele.tipo === `${idCategory}`)

  useEffect(() => {
    const db = getFirestore()
    const itemsDB = collection(db, "items")
    getDocs(itemsDB).then((snapshot)=>{
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setItems(docs)
    })
  }, []);

  return (
    <div>
      {idCategory !== undefined ? <ItemList items={results}/>: <ItemList items={items}/> }
    </div>
  );
};

export default ItemListContainer;
