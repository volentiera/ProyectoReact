import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="row-span-5 border border-gray-200 bg-gray-600 mt-5 mb-5 shadow rounded-xl ml-3">
        <div className="grid grid-flow-row text-sm font-medium text-white"></div>
      </div>
      {items.map((items, index) => {
        return <Item item={items} key={index} />;
      })}
    </div>
  );
};

export default ItemList;
