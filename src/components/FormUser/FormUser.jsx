import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./formuserconfig.css";
import { CartContext } from "../../context/CartContext";

const FormUser = ({ changeHandler, onAdd, handleClose, handleOpen, open, id, form}) => {
  
  const { cart , total , removeAllItems } = useContext(CartContext)

  return (
    <>
      <button
        onClick={handleOpen}
        className="m-5 text-white bg-blue-500 rounded button-delete-all-cart"
      >
        Comprar
      </button>
      {id === undefined ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-gray-300 modal-form">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Ingrese sus datos para finalizar la compra:
              </Typography>
              <div className="flex flex-col p-5 m-5">
                <label htmlFor="name">Nombre y apellido:</label>
                <input
                  onChange={(e) => changeHandler(e)}
                  id="name"
                  name="name"
                  className="m-3 rounded"
                  type="text"
                />
                <label htmlFor="email">E-mail:</label>
                <input
                  onChange={(e) => changeHandler(e)}
                  id="email"
                  name="email"
                  className="m-3 rounded"
                  type="email"
                />
                <label htmlFor="phone">Telefono</label>
                <input
                  onChange={(e) => changeHandler(e)}
                  id="phone"
                  name="phone"
                  className="m-3 rounded"
                  type="text"
                />
              </div>
              <div className="flex justify-center p-5 m-5">
                <button
                  onClick={(e) => onAdd(e)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 text-center inline-flex items-center mr-2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Finalizar Compra
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Volver
                </button>
              </div>
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            open={open}
            onClose={() => {handleClose() ; removeAllItems()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-gray-300 modal-form-success">
                <h2>
                  Felicidades {form.name} Su compra ha sido exitosa:
                </h2>
                <div>
                  <h3 className="pt-5">Numero de compra:</h3>
                  <h3 className="p-5 text-center">
                    {id}
                  </h3>
                  <h3>Sus articulos son:</h3>
                  {cart.map((e,index) => {
                    return (
                    <>
                    <h3 key={cart.id} className="inline-block p-5 text-center">{index+1}- {e.nombre} - {e.marca}</h3>
                    </>
                    )
                  })}
                  <h3 className="pt-5">
                    El total es: ${total()}
                  </h3>
                </div>
                <h3 className="pt-5">
                  Mas detalles seran enviados a {form.email}
                </h3>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default FormUser;
