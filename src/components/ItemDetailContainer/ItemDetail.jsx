import React from 'react';
import "./itemdetailconfig.css";



const ItemDetail = ({items}) => {
    const dataFound = items.find(ele => ele.nombre === "Remera Femenina")
    if (dataFound !== undefined){
    return (
    <div key={dataFound.id} className="borders-detail shadow-lg">
        <h2 className='tittle-detail container'>{dataFound.nombre} {dataFound.marca}</h2>
        <div className='p-5 m-5 grid grid-cols-6 grid-rows-2 gap-4'>
            <div></div>
            <img className="col-span-2 row-span-2"  src={dataFound.imagen} alt="" />
            <div className='col-span-2 row-span-2  description-detail'>
                <h3>Marca: {dataFound.marca}</h3>
                <h3>Precio: ${dataFound.precio}</h3>
            </div>
        </div>
    </div>
    );
    }
}

export default ItemDetail;