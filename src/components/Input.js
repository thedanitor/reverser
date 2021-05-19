import React, { useState } from "react";
import StringOutput from "./StringOutput";

export default function Input() {
  const [reversedString, setReversedString] = useState("");
  const [stringValue, setStringValue] = useState("");

  const reverseString = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  const handleClick = e => {
    e.preventDefault();
    setReversedString(reverseString(stringValue));
  };
  return (
    <form>
      <label>
        Type your string:
        <input
          type="text"
          onChange={e => setStringValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Reverse" onClick={handleClick} />
      <StringOutput reversedString={reversedString} />
    </form>
  );
}
