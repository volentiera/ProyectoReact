import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {

    return (
    <div className="grid grid-cols-5 gap-4">
        {items.map((items, index) => {
            return(
                <Item item={items} key={index} />
            )
    })}
    </div>
    );
};

export default ItemList;