import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const NumberImput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 10,
    numero2: 5,
  });

  const {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Número1: {""}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-2">
        Numero2: {""}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>

      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Resta" calculo={resta()} />
      <Resultado operacion="Multiplicacion" calculo={multiplicacion()} />
      <Resultado operacion="Division" calculo={division()} />
    </>
  );
};

NumberImput.propTypes = {
  name: PropTypes.string,
};

export default NumberImput;
