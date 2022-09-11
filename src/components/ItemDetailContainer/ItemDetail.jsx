import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetailconfig.css";



const ItemDetail = ({item}) => {
    return (
    <div key={item.id}>
        <div className='grid grid-cols-6 grid-rows-2 gap-4 p-5 m-5'>
            <div></div>
            <img className="col-span-2 row-span-2"  src={item.imagen} alt="" />
            <div></div>
            <div className='col-span-1 row-span-2 description-detail'>
                <h2 className='tittle-detail'>{item.nombre}</h2>
                <h3>Marca: {item.marca}</h3>
                <h3>Precio: ${item.precio}</h3>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;