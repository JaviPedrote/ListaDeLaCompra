import { decreaseProduct } from "../redux/listSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const DecreaseButton = ({ productId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <button
      className="list-buttons"
      onClick={() => dispatch(decreaseProduct(productId))}
    >
      {t("list.decrease")}
    </button>
  );
};

export default DecreaseButton;
