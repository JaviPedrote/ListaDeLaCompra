import { useState, useReducer, useEffect, useRef } from "react";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import DeleteButton from "./DeleteButton";


export const TYPE = { 
  INCRESE: Symbol('increase'),
  DECRESE: Symbol('decrease'),
  DELETE: Symbol('delete'),
  ADD: Symbol('add'),
};

const initialState = [];

function increaseProduct (state,payload) {
  return state.map((product) => 
    product.id === payload 
  ? { ...product, units: product.units + 1 } 
  : product)
}
function decreaseProduct (state,payload) {
  return state.map((product) => 
    product.id === payload && product.units > 1
  ? { ...product, units: product.units - 1 } 
  : product)
}
function deleteProduct (state,payload) {
  return state.filter((product) => product.id !== payload);
}
function addProduct (state,payload) {
  return [...state, payload];
}
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.INCRESE:
      return increaseProduct(state, action.payload);
    case TYPE.DECRESE:
      return decreaseProduct(state, action.payload);
    case TYPE.DELETE:
      return deleteProduct(state, action.payload);
    case TYPE.ADD:
      return addProduct(state, action.payload);
    default:
      return state;
  }
};

const List = () => {
  const [list, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState(" ");
  const inputName = useRef();

  useEffect(() => {
    const handleInputChange = (event) => {
        setProduct(event.target.value);
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const productValue = event.target.value;
        event.target.value = ("");
        productValue !== ""
          ? dispatch({
              type: TYPE.ADD,
              payload: { id: Date.now(), name: productValue, units: 1 },
            })
          : alert("Introduce un producto");
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
        <h1 className="h1">Lista de la compra</h1>
        <div className="product-container">
          <div className="input">
            <label htmlFor="product">Producto:</label>
            <input id="product" ref={inputName} type="text" maxLength={20} defaultValue={product} />
            <button
              className="input-button"
              onClick={() => {
                inputName.current.focus();
                setProduct("");
                inputName.current.value= ""; 
                product !== ""
                  ? dispatch({
                      type: TYPE.ADD,
                      payload: { id: Date.now(), name: product, units: 1 }, //
                    })
                  : alert("Introduce un producto");
              }}
            >
              Añadir
            </button>
          </div>
          {list.map((product) => (
            <div className="list" key={product.id}>
              <span className="name">{product.name}</span>
              <span className="units">
                {product.units}
                {product.units < 2 ? " unidad" : " unidades"}
              </span>
              <IncreaseButton productId={product.id} dispatch={dispatch} />
              <DecreaseButton productId={product.id} dispatch={dispatch} />
              <DeleteButton productId={product.id} dispatch={dispatch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

