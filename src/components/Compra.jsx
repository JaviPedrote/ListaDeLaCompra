import React from "react";
import { useState, useReducer } from "react";

const types = {
  aumentar: "aumentar",
  disminuir: "disminuir",
  eliminar: "eliminar",
  añadir: "añadir",
};

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case types.aumentar:
      return state.map((producto) =>
        producto.id === action.payload
          ? { ...producto, unidades: producto.unidades + 1 }
          : producto
      );
    case types.disminuir:
      return state.map((producto) =>
        producto.id === action.payload && producto.unidades > 1
          ? { ...producto, unidades: producto.unidades - 1 }
          : producto
      );
    case types.eliminar:
      return state.filter((producto) => producto.id !== action.payload);
    case types.añadir:
      return [...state, action.payload];
    default:
      return state;
  }
};
const Compra = () => {
  const [lista, dispatch] = useReducer(reducer, initialState);
  const [producto, setProducto] = useState("");
  const inputName = React.createRef("");

  return (
    <div className="contenedor-principal">
      <h1>Lista de la compra</h1>
      <div className="input">
        <label htmlFor="producto">Producto:</label>
        <input
          id="producto"
          ref={inputName}
          type="text"
          maxLength={25}
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputName.current.focus();
              setProducto("");
              producto !== ""
                ? dispatch({
                    type: types.añadir,
                    payload: { id: Date.now(), nombre: producto, unidades: 1 },
                  })
                : alert("Introduce un producto");
            }
          }}
        />
        <button
          className="botonInput"
          onClick={() => {
            inputName.current.focus();
            setProducto("");
            producto !== ""
              ? dispatch({
                  type: types.añadir,
                  payload: { id: Date.now(), nombre: producto, unidades: 1 },
                })
              : alert("Introduce un producto");
          }}
        >
          Añadir
        </button>
      </div>
      {lista.map((producto) => (
        <div className="lista" key={producto.id}>
          <span className="nombre">{producto.nombre}</span> {producto.unidades}
          {producto.unidades < 2 ? " unidad" : " unidades"}
          <span className="botonesInput">
          <button
            className="botonesLista"
            onClick={() =>
              dispatch({ type: types.aumentar, payload: producto.id })
            }
          >
            Aumentar
          </button>
          <button className="botonesLista"
            onClick={() =>
              dispatch({ type: types.disminuir, payload: producto.id })
            }
          >
            Disminuir
          </button>
          <button className="botonesLista"
            onClick={() =>
              dispatch({ type: types.eliminar, payload: producto.id })
            }
          >
            Eliminar
          </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Compra;
