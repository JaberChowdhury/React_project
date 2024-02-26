import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/app/hooks";

import { decrement, selectCount, increment } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div onClick={() => dispatch(increment())}>+</div>
      <div>{count}</div>
      <div onClick={() => dispatch(decrement())}>-</div>
    </div>
  );
}

export default Counter;
