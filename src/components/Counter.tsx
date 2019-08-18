import React, { useState, useCallback } from "react";

interface IProps {
  count: number;
  onIncrement: any;
  onDecrement: any;
  onAddNumber: any;
}

export const Counter = ({
  count,
  onIncrement,
  onDecrement,
  onAddNumber
}: IProps) => {
  const [input, setInput] = useState(0);
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(Number(e.target.value) || 0);
    },
    [input]
  );

  const handleAddNumber = useCallback(
    (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onAddNumber(input);
    },
    [input]
  );

  return (
    <div>
      <p>{count}</p>
      <input type="number" value={input} onChange={handleInput} />
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={handleAddNumber}>Add</button>
    </div>
  );
};
