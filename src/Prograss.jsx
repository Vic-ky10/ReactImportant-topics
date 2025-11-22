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
    <div style={{ position: "absolute", top: "30%", right: "30%" }}>
      <h2 style={{ textAlign: "center" }}>prograss bar</h2>
      <br />
      <div
        style={{
          width: "200px",
          height: "40px",
          border: "2px solid black",
          textAlign: "center",
          borderRadius: "30px ",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "blue",
            width: `${count}% `,
            textAlign: "center",
            padding: "10px",
          }}
        >
          {count}
        </div>
      </div>
    </div>
  );
}

export default Prograss;
