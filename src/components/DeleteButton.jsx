import { TYPE } from "./List";

const DeleteButton = ({ productId, dispatch }) => {
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch({ type: TYPE.DELETE , payload: productId })}
      >
        Eliminar
        </button>
  );
};

export default DeleteButton;
