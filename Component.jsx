import React from "react";

const Component = React.memo(({ name, addCart }) => {
  console.log(`${name} product re-render `);
  return (
    <div className="product" style={style}>
      <h2>{name}</h2>
      <button onClick={addCart}>AddtoCart</button>
    </div>
  );
});
const style = {
  display: "inline-block",
  border: "2px solid black",
  margin: "5px",
  padding: "2px 30px ",
};
export default Component;
