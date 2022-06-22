import { useState } from "react";

const CounterClick = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setCounter(counter + 1);
      }}> Click Me </button>

      <h1>{counter}</h1>
    </div>
  )

};

export default CounterClick;