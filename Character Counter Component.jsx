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
   <h2 style={{textAlign :"center" , marginBottom :"50px"}}>
    <u>Type SomeThing</u>
   </h2>
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
        rows={5}
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
        <h3 style={{ color: "yellow ", fontSize: "14px" }}>Limit reached!</h3>
      )}
    </div>
       </>   
  );
}

export default CharacterCounter;
