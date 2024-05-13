import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/listSlice'; // Asegúrate de importar desde la ubicación correcta

const AddButton = ({ product, setProduct, inputName }) => {
  const dispatch = useDispatch();
  

  const handleClick = () => {
    inputName.current.focus();
    setProduct("");
    inputName.current.value= ""; 
    product !== ""
      ? dispatch(addProduct({ id: Date.now(), name: product, units: 1 }))
      : alert("Introduce un producto");
  };

  return (
    <button className="input-button" onClick={handleClick}>
      Añadir
    </button>
  );
};

export default AddButton;
