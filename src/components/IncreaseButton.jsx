import React from "react";

const IncreaseButton = ({ productId, dispatch }) => {
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: "increase", payload: productId })}
      >
        Aumentar
      </button>
  );
};

export default IncreaseButton;
