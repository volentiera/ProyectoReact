import React, { useState } from 'react';

const CartContext = React.createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        const resultIsInCart = isInCart(item.id)

        if ( resultIsInCart ){
            const resultAdd = cart.filter((a) => a.id !== item.id)
            item.quantity = quantity + resultIsInCart.quantity
            resultAdd.push(item)
            setCart(resultAdd);
        }else {
            item.quantity = quantity
            setCart([...cart, item])
        }
    }
    const removeAllItems = () =>{
        setCart([])
    }
    const removeItemById = (id)=>{
        const resultRemove = cart.filter(a => a.id !== id)
        setCart([...resultRemove])
    }
    const isInCart = (itemId) =>{
        return cart.find((e) => e.id === itemId)
    }

    console.log(cart)
    return(
        <CartContext.Provider value={{cart, setCart, addItem , removeAllItems, removeItemById, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}



export {CartProvider, CartContext};