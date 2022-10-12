import React from 'react';
import "./itemlistconfig.css";




const ItemListLoader = () => {
    const fakeItems = [
        {
            id:"1"
        },
        {   
            id:"2"
        },
        {
            id:"3"
        },
        {   
            id:"4"
        },
        {   
            id:"5"
        },
        {   
            id:"6"
        },
        {   
            id:"7"
        },
        {   
            id:"8"
        },
        {   
            id:"9"
        },
        {   
            id:"10"
        },
        {   
            id:"11"
        },
        {   
            id:"12"
        },
        {   
            id:"13"
        },
        {   
            id:"14"
        },
        {   
            id:"15"
        }
    ]
    return (
        <div className="grid grid-cols-6">
            <div className="row-span-5 border border-gray-200 bg-gray-600 mt-5 mb-5 shadow rounded-xl ml-3">
                <div className="grid grid-flow-row text-sm font-medium text-white">
                </div>
            </div>
            {fakeItems.map((e) =>{
                return (
                <div key={e.id} className="p-5 m-5 text-gray-700 bg-white rounded-xl shadow-lg border-solid border-2 border-gray-300">
                    <svg className="col-span-2 row-span-2 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    <div className="mb-4 bg-gray-200 rounded-full loader-item-text-title"></div>
                    <div className="mb-4 bg-gray-200 rounded-full loader-item-text"></div>
                    <div className="mb-4 bg-gray-200 rounded-full loader-item-text"></div>
                    <div className="mb-4 bg-gray-200 rounded-full loader-item-text"></div>
                    <div className="mb-4 bg-gray-200 rounded-full loader-item-text"></div>
                    <button 
                        className="px-4 py-2 mt-4 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700"
                    >
                    </button>
                </div>
                )
            })}
        </div>
    );
};

export default ItemListLoader;