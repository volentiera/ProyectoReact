import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {

    return (
    <div className="grid grid-cols-5 gap-4">
        {items.map((items, index) => {
            const iva = (items.precio * 0.21)
            items.precio = parseInt(items.precio) + parseInt(iva)
            return(
                <Item item={items} key={index} />
            )
    })}
    </div>
    );
};

export default ItemList;