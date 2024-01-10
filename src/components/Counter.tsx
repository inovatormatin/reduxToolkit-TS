import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter: React.FC = () => {
  // this is how we import state from global store
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>Redux Tool-kit</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Add +10</button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          Add +5 Async
        </button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        <p>Counter value : {count}</p>
      </div>
    </div>
  );
};

export default Counter;
