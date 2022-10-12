import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./cartconfig.css";
import FormUserContainer from "../FormUser/FormUserContainer";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const { cart , removeItemById, removeAllItems, total  } = useContext(CartContext);
  const [totalPrice ,setTotalPrice] = useState(0)

  useEffect(()=>{
    setTotalPrice(total())
  },[cart])

  const removeAllItemsHandler = () => {
    removeAllItems();
  };
  return (
    <>
      {cart.length > 0 ? (
        <>
        <div className="pt-5 bg-gray-200"></div>
        <div className="pt-5 bg-gray-400"></div>
          {cart.map((element , index) => (
            <CartItem key={element.id} cartItem={element} removeItemById={removeItemById} index={index} />
          ))}
          <div className="grid grid-cols-2 grid-rows-1 p-5 pb-5 text-center bg-gray-200">
            <h2 className="total-cart-text">Total Final:  ${totalPrice}</h2>
            <div>
              <FormUserContainer/>
              <button
                onClick={removeAllItemsHandler}
                className="text-white bg-gray-500 rounded button-delete-all-cart"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </>
      ) 
      : 
      (
        <CartEmpty/>
      )}
    </>
  );
};

export default Cart;
