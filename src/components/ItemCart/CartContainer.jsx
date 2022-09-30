import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import "./cartconfig.css";
import { Link } from "react-router-dom";
import FormUserContainer from "../FormUser/FormUserContainer";

const CartContainer = () => {
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
          {cart.map((e , index) => (
            <Cart key={e.id} item={e} removeItemById={removeItemById} index={index} />
          ))}
          <div className="grid grid-cols-2 grid-rows-1 text-center pb-5 bg-gray-200 p-5">
            <h2 className="total-cart-text">Total Final:  ${totalPrice}</h2>
            <div>
              <FormUserContainer/>
              <button
                onClick={removeAllItemsHandler}
                className="button-delete-all-cart bg-gray-500 rounded text-white"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </>
      ) 
      : 
      (
        <div className="empty-cart bg-gray-200">
          <h2 className="empty-cart-text">El carrito esta vacio</h2>
          <div className="button-back-menu-cart"><Link to={"/"}><button className="ml-5 text-white bg-gray-500  rounded">Volver al inicio</button></Link></div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
