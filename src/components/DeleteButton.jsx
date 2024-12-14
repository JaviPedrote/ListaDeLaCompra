import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/listSlice";
import { useTranslation } from "react-i18next";

const DeleteButton = ({ productId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
  };

  return (
    <button className="list-buttons" onClick={handleDelete}>
      {t("list.delete")}
    </button>
  );
};

export default DeleteButton;
