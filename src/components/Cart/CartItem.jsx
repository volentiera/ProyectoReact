import React from "react";
import "./cartconfig.css";

const Cart = ({ cartItem, index, removeItemById }) => {
  const removeItemByIdHandler = () => {
    removeItemById(cartItem.id);
  };
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-1 text-center bg-gray-200">
        <div className="text-cart">{index + 1}-</div>
        <img className="img-cart" src={cartItem.imagen} alt="" />
        <h2 className="text-cart">
          {cartItem.nombre} - {cartItem.marca}
        </h2>
        <h2 className="text-cart">Cantidad: {cartItem.quantity}</h2>
        <h2 className="text-cart">${cartItem.precio}</h2>
        <button
          onClick={removeItemByIdHandler}
          className="button-cart bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          X
        </button>
      </div>
      <div className="pt-5 bg-gray-400"></div>
    </>
  );
};

export default Cart;
