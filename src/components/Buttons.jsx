import React, { useEffect, useState } from "react";

const Button = ({Arrow}) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (state) {
      console.log("presionando el boton");
    }
  });
  const handleEvent = (event) => {
    console.log("firsonpress");
  };

  return (
    <div className="button sm"onMouseDown={handleEvent}>
      <input type="checkbox" className="check" />
  <Arrow/>      
    </div>
  );
};

export default Button;
