import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <h1 className='text-4xl italic font-style:'>
            {greeting}
        </h1>
        
    );
};

export default ItemListContainer;