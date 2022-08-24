import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const addNumber = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restNumber = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
    <div className="flex items-center justify-center p-5 m-5 text-black bg-white rounded">
        <button className="p-5" onClick={restNumber}>-</button>
        <h3 className="p-5">{count}</h3>
        <button className="p-5" onClick={addNumber}>+</button>
    </div>
    <div className="flex items-center justify-center p-3 m-5 text-black bg-white rounded">
      <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
    </div>
  );
};

export default ItemCount;
