import { useState } from "react";
import NumberImput from "./NumberImput";
import Resultado from "./Resultado";

const Calculadora = () => {
  const [suma, setSuma] = useState(5);

  return (
    <div>
      <NumberImput name="Número 1" />
      <NumberImput name="Número 2" />

      <Resultado operacion="Suma" calculo={suma} />
      <Resultado operacion="Resta" calculo={suma} />
      <Resultado operacion="Multiplicacion" calculo={suma} />
      <Resultado operacion="Division" calculo={suma} />
    </div>
  );
};

export default Calculadora;
