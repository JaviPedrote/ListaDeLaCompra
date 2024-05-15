import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/listSlice";

const AddButton = ({ product, setProduct, inputName }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => {
    inputName.current.focus();
    setProduct("");
    inputName.current.value = "";
    product !== ""
      ? dispatch(addProduct({ id: Date.now(), name: product, units: 1 }))
      : alert(t("Enter a product"));
  };

  return (
    <>
      <button className="input-button" onClick={handleClick}>
        {t("Add")}
      </button>
    </>
  );
};

export default AddButton;
