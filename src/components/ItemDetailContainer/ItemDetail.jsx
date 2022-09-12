import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetailconfig.css";
import { useState } from "react";
import { Link } from 'react-router-dom';




const ItemDetail = ({item}) => {
    const [count, setQuantity] = useState(0);
    const [change,setChange] = useState(true)
    const onAdd = (quantity) =>{
        setQuantity(quantity)
    }
    const changeItemCount = (a) =>{
        setChange(a)
    }
    return (
    <div key={item.id}>
        <div className='grid grid-cols-6 grid-rows-2 gap-4 p-5 m-5'>
            <div></div>
            <img className="col-span-2 row-span-2"  src={item.imagen} alt="" />
            <div></div>
            <div className='col-span-1 row-span-2 description-detail'>
                <h2 className='tittle-detail'>{item.nombre}</h2>
                <h3>Marca: {item.marca}</h3>
                <h3>Precio por unidad: ${item.precio}</h3>
                <h3>En el carrito hay: {count}</h3>
                <h3>Por un total de: $ {(parseInt(item.precio) * parseInt(count)) }</h3>
                {change === true ?
                <ItemCount stock={10} initial={1} onAdd={onAdd} changeItemCount={changeItemCount}/>
                : 
                <Link to={"/cart"}>
                <button 
                className='text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='button'>
                    Ir al carrito
                </button>
                </Link>
                }
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;