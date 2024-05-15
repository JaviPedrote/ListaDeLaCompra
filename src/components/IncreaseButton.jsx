import { useDispatch } from "react-redux";
import { increaseProduct } from "../redux/listSlice";
import { useTranslation } from "react-i18next";

const IncreaseButton = ({ productId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <button
      className="list-buttons"
      onClick={() => dispatch(increaseProduct(productId))}
    >
      {t("Increase")}
    </button>
  );
};

export default IncreaseButton;
