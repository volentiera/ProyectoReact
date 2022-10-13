import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import FormUser from "./FormUser";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const FormUserContainer = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id, setId] = React.useState();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cart, total } = useContext(CartContext);

  const changeHandler = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  const onAdd = () => {
    const finalOrder = {
      buyer: form,
      items: cart,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, finalOrder).then((snapshot) => {
      setId(snapshot.id);
    });
    id !== undefined && handleClose();
  };

  return (
    <>
      <FormUser
        changeHandler={changeHandler}
        onAdd={onAdd}
        handleClose={handleClose}
        open={open}
        handleOpen={handleOpen}
        id={id}
        form={form}
      />
    </>
  );
};

export default FormUserContainer;
