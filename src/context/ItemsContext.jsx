import React, { useState, useEffect } from "react";
import { getFirestore, getDocs, getDoc, doc, collection } from "firebase/firestore";


const ItemsContext = React.createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [idItem, setIdItem] = useState('')
  const [idCategory, setIdCategory] = useState("")
  const [item, setItem] = useState(null);
  const results = items.filter((ele) => ele.tipo === `${idCategory}`);


  useEffect(() => {
    const db = getFirestore();
    const itemsDB = collection(db, "items");
    getDocs(itemsDB).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(docs);
    });
  }, []);
  
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
      setItem(null)
      
    }, [idItem]);
    const checkEmpty = () =>{
      if (item !== null ){
        let isEmpty = Object.keys(item).length === 0
        return isEmpty
      }
    }
  return (
  <ItemsContext.Provider value={{items, checkEmpty, results, setIdCategory, item, setIdItem}}>
    {children}
  </ItemsContext.Provider>)
};
export { ItemsProvider, ItemsContext };
