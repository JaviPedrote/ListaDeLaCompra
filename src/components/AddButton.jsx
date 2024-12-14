import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/listSlice";
import dayjs from "dayjs";

const AddButton = ({ product, setProduct, inputName }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentDate = dayjs();

  const handleClick = () => {
    inputName.current.focus();
    setProduct("jj");
    inputName.current.value = "";
    product !== ""
      ? dispatch(
          addProduct({
            id: Date.now(),
            name: product,
            units: 1,
            timestamp: currentDate.format(t("list.date")),
          })
        )
      : alert(t("list.enterProduct"));
  };

  return (
    <>
      <button className="input-button" onClick={handleClick}>
        {t("list.add")}
      </button>
    </>
  );
};

export default AddButton;
