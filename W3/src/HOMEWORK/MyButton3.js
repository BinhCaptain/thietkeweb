// MyButton3.js
import React from "react";

const MyButton3 = ({ disabled, text, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {text}
  </button>
);

MyButton3.defaultProps = {
  text: "My Button3",
  disabled: false,
};

export default MyButton3;
