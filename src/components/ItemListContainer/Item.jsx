import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ItemCount from "../ItemCount/ItemCount";
import "./modalcart.css";

const Item = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onAdd = (quantity) => {
    console.log(`Compro: ${quantity}`);
  };
  return (
    <div className="p-5 m-5 text-gray-700 bg-white rounded shadow-lg">
      <img className="rounded" src={item.imagen} alt="..." />
      <h3 className="">{item.nombre} </h3>
      <h3>{item.marca}</h3>
      <p className="mt-4">${item.precio}</p>
      <button
        onClick={handleOpen}
        className="px-4 py-2 mt-4 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700"
      >
        Comprar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-cart">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Item;
