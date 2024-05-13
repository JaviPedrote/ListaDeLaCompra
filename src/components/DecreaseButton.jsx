import { decreaseProduct } from "../redux/listSlice";
import { useDispatch } from "react-redux";

const DecreaseButton = ({ productId }) => {
  const dispatch = useDispatch();
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch(decreaseProduct(productId))}
      >
        Disminuir
      </button>
  );
};

export default DecreaseButton;
