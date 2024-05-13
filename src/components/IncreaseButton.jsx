import { useDispatch } from "react-redux";
import { increaseProduct } from "../redux/listSlice";


const IncreaseButton = ({ productId }) => {

  const dispatch = useDispatch();
  
  return (
      <button
        className="list-buttons"
        onClick={() => dispatch(increaseProduct(productId))}
      >
        Aumentar
      </button>
  );
};

export default IncreaseButton;
