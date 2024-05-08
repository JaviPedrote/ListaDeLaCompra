import React from "react";
import { useState, useReducer } from "react";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import DeleteButton from "./DeleteButton";

const types = {
  increase: "increase",
  decrease: "decrease",
  delete: "delete",
  add: "add",
};

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case types.increase:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, units: product.units + 1 }
          : product
      );
    case types.decrease:
      return state.map((product) =>
        product.id === action.payload && product.units > 1
          ? { ...product, units: product.units - 1 }
          : product
      );
    case types.delete:
      return state.filter((product) => product.id !== action.payload);
    case types.add:
      return [...state, action.payload];
    default:
      return state;
  }
};

const List = () => {
  const [list, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState("");
  const inputName = React.createRef("");

  return (
    <div className="main-container">
      <div className="list-container">
      <h1 className="h1">Lista de la compra</h1>
      <div className="product-container">
        <div className="input">
          <label htmlFor="product">Producto:</label>
          <input
            id="product"
            ref={inputName}
            type="text"
            maxLength={20}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                inputName.current.focus();
                setProduct("");
                product !== ""
                  ? dispatch({
                      type: types.add,
                      payload: { id: Date.now(), name: product, units: 1 },
                    })
                  : alert("Introduce un producto");
              }
            }}
          />
          <button
            className="input-button"
            onClick={() => {
              inputName.current.focus();
              setProduct("");
              product !== ""
                ? dispatch({
                    type: types.add,
                    payload: { id: Date.now(), name: product, units: 1 },
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
