import { TYPE } from "./List";


const IncreaseButton = ({ productId, dispatch }) => { 
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: TYPE.INCRESE, payload: productId })}
      >
        Aumentar
      </button>
  );
};

export default IncreaseButton;
