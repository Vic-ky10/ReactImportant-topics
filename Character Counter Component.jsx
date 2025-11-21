import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const maxLimit = 50;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const isLimitReached = charCount > maxLimit;

  return (

    <>
   <h2 style={{textAlign :"center" , marginBottom :"50px"}}> CHARACTER COUNTER COMPONENT</h2>
    <div

    
      style={{
        width: "350px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px auto",
        fontFamily: "Arial",
      }}
    >
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        placeholder="Type something..."
      />

      <p
        style={{
          marginTop: "10px",
          fontWeight: "bold",
          color: isLimitReached ? "red" : "black",
        }}
      >
        Characters: {charCount} / {maxLimit}
      </p>

      {isLimitReached && (
        <p style={{ color: "red", fontSize: "14px" }}>Limit reached!</p>
      )}
    </div>
       </>   
  );
}

export default CharacterCounter;
