import React from 'react';
import "./itemdetailconfig.css";



const ItemDetail = ({item}) => {
    return (
    <div key={item.id} className="borders-detail">
        <h2 className='tittle-detail container'>{item.nombre} {item.marca}</h2>
        <div className='p-5 m-5 grid grid-cols-6 grid-rows-2 gap-4'>
            <div></div>
            <img className="col-span-2 row-span-2"  src={item.imagen} alt="" />
            <div className='col-span-2 row-span-2  description-detail'>
                <h3>Marca: {item.marca}</h3>
                <h3>Precio: ${item.precio}</h3>
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;