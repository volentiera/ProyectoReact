import React, { useState, useEffect } from 'react';

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
        localStorage.setItem("items", JSON.stringify([]))
    }
    const removeItemById = (id)=>{
        const resultRemove = cart.filter(a => a.id !== id)
        setCart([...resultRemove])
    }
    const isInCart = (itemId) =>{
        return cart.find((item) => item.id === itemId)
    }
    const total = () =>{
        let tot = 0
        cart.forEach(item=>{
            tot = tot + item.precio * item.quantity
        })
        return tot
    }

    useEffect(()=>{
        if (localStorage.getItem('items') !== null){
            setCart(JSON.parse(localStorage.getItem('items')))
        }
    },[])

    const isEmpty = Object.keys(cart).length === 0
    if (!isEmpty){
        localStorage.setItem("items", JSON.stringify(cart))
    }

    return(
        <CartContext.Provider value={{cart, setCart, addItem , removeAllItems, removeItemById, isInCart, total}}>
            {children}
        </CartContext.Provider>
    )
}



export {CartProvider, CartContext};