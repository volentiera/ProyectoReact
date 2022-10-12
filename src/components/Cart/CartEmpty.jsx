import React from 'react';
import "./cartconfig.css";
import { Link } from "react-router-dom";

const CartEmpty = () => {
    return (
        <div className="bg-gray-200 empty-cart">
            <h2 className="empty-cart-text">El carrito esta vacio</h2>
            <div className="button-back-menu-cart"><Link to={"/"}><button className="ml-5 text-white bg-gray-500 rounded">Volver al inicio</button></Link></div>
        </div>
    );
};

export default CartEmpty;