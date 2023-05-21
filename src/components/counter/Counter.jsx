import React, { useState } from "react";
import "./counter.style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plusClickHandler = () => {
    if (count < 100) {
      setCount(count + 10);
    }
  };

  const minusClickHandler = () => {
    if (count > 0) {
      setCount(count - 10);
    }
  };

  return (
    <>
      <div className="counter-container">
        <div className="counter">
          <button
            onClick={minusClickHandler}
            style={{ backgroundColor: "lightblue" }}
          >
            -10
          </button>
          <p>{count}</p>
          <button
            onClick={plusClickHandler}
            style={{ backgroundColor: "tomato" }}
          >
            +10
          </button>
        </div>
        {count === 100 && (
          <h1 className="warning" style={{ color: "red", fontSize: "4rem" }}>
            MAX VALUE
          </h1>
        )}
        {count === 0 && (
          <h1 className="warning" style={{ color: "steelblue" }}>
            MIN VALUE
          </h1>
        )}
      </div>
    </>
  );
};

export default Counter;
