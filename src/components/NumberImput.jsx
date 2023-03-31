import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberImput = ({ name }) => {
  const [numeros, setNumeros] = useState(0);

  const handleChange = (e) => {
    setNumeros(parseFloat(e.target.value));
  };

  return (
    <>
      <label>
        {name}: <input value={numeros} onChange={handleChange} type="number" />
      </label>
    </>
  );
};

NumberImput.propTypes = {
  name: PropTypes.string,
};

export default NumberImput;
