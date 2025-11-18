import React, { useState, useMemo } from "react";

function UseMemo() {
   const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  function showMax() {
    console.log("change");
    return Math.max(...arr);
  }
  const memoVal = useMemo(() => showMax(), [arr]);
  return (
    
    <div>

      <h2>USE MEMO PRACTICE</h2>
      <button onClick={() => setCount(count + 1)} style={style}>
        Add to Count{" "}
      </button>
      <button onClick={() => setArr([...arr, count + 2])} style={style}>
        {" "}
        add to array
      </button>

      <p>{count} </p>
      <p>{memoVal}</p>
      <p>{arr}</p>
    </div>
  );
}
const style = {
  backgroundColor: "red",
  padding: "20px",
};

export default UseMemo