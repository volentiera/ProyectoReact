import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <h1 className='font-style: italic text-4xl'>
            {greeting}
        </h1>
    );
};

export default ItemListContainer;