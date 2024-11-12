import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/actions";

const App = () => {
  // Access the state from the store
  const count = useSelector((state: any) => state.count);

  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        className="bg-[red] p-2 rounded-sm mx-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-[red] p-2 rounded-sm mx-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
