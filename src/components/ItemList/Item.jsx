import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {

  return (
    <div className="p-5 m-5 text-gray-700 bg-white rounded-xl shadow-lg border-solid border-2 border-gray-300">
      <img className="rounded" src={item.imagen} alt="..." />
      <h3 className="">{item.nombre} </h3>
      <h3>{item.marca}</h3>
      <p className="mt-4">${item.precio}</p>
      <Link to={`/item/${item.id}`}>
      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700"
      >
        Mas Info
      </button>
      </Link>
    </div>
  );
};

export default Item;
