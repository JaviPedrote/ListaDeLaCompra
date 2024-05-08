import React from "react";

const DecreaseButton = ({ productId, dispatch }) => {
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: "decrease", payload: productId })}
      >
        Disminuir
      </button>
  );
};

export default DecreaseButton;
