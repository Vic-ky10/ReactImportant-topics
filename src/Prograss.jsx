import React, { useEffect, useState } from "react";

function Prograss() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{ textAlign: "center" }}>prograss bar</h2>
      <br />
         
    </div>
   
  );
}

export default Prograss;
