import React from 'react';


const Item = ({item}) => {
        return (
        <div className="p-5 m-5 bg-white rounded text-gray-700 shadow-lg">
            <h4>{item.id}</h4>
            <img className='rounded' src={item.imagen} alt="..." />
            <h3 className="">{item.nombre} </h3>
            <h3>{item.marca}</h3>
            <p className='mt-4'>${item.precio}</p>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-4'>Comprar</button>
        </div>
        );
};

export default Item;