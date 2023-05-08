import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (arg: "+" | "-") => {
    arg === "+" ? setCount((prev) => prev + 1) : setCount((prev) => prev - 1);
  };

  return (
    <div className={classes.button}>
      {count}

      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("-")}>-</button>
    </div>
  );
};
