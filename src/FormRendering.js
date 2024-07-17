import React from "react";

function FormRendering({ value, handleInputChange }) {
  console.log("Rendered");
  return (
    <div>
      <input
        type="number"
        name="testing_render"
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
      ></input>
    </div>
  );
}

export default FormRendering;
