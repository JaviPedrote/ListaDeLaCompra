import React from "react";

const DeleteButton = ({ productId, dispatch }) => {
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: "delete", payload: productId })}
      >
        Eliminar
        </button>
  );
};

export default DeleteButton;
