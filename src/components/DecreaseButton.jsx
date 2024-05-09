import { TYPE } from "./List";

const DecreaseButton = ({ productId, dispatch }) => {
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: TYPE.DECRESE , payload: productId })}
      >
        Disminuir
      </button>
  );
};

export default DecreaseButton;
