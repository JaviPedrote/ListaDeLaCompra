import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/listSlice";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import SearchBar from "./SearchBar";
import dayjs from "dayjs";

const List = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [product, setProduct] = useState("");
  const inputName = useRef();
  const currentDate = dayjs();

  useEffect(() => {
    const handleInputChange = (event) => {
      setProduct(event.target.value);
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const productValue = event.target.value;
        event.target.value = "";
        setProduct("");
        productValue !== ""
          ? dispatch(
              addProduct({
                id: Date.now(),
                name: productValue,
                units: 1,
                timestamp: currentDate.format(t("list.date")),
              })
            )
          : alert(t("list.enterProduct"));
      }
    };

    const inputElement = inputName.current;
    inputElement.addEventListener("input", handleInputChange); 
    inputElement.addEventListener("keypress", handleKeyPress); 

    return () => {
      inputElement.removeEventListener("input", handleInputChange);
      inputElement.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="list-container">
        <div className="language">
          <LanguageSelector />
        </div>
        <h1 className="h1">{t("list.shoppingList")}</h1>
        <SearchBar list={list} />
        <div className="product-container">
          <div className="input">
            <label htmlFor="product"> {t("products.product")} :</label>
            <input
              id="product"
              placeholder={t("list.enterProduct")}
              ref={inputName}
              type="text"
              maxLength={20}
              defaultValue={product}
            />
            <AddButton
              product={product}
              setProduct={setProduct}
              inputName={inputName}
            />
          </div>
          {list.map((product) => (
            <div className="list" key={product.id}>
              <div className="name">{product.name}</div>
              <div className="units">
                {product.units}
                {product.units < 2 ? t("products.unit") : t("products.units")}
              </div>
              <input
                className="check"
                type="checkbox"
                checked={product.isBought}
                id={product.id}
              />
              <div className="date">{product.timestamp}</div>
              <DeleteButton productId={product.id} />
              <IncreaseButton productId={product.id} />
              <DecreaseButton productId={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
