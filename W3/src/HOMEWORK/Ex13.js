// Ex13.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import MyButton3 from "./MyButton3";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [buttonState, setButtonState] = useState({
    text: "Second Button",
    disabled: false,
  });

  const handleButtonClick = () => {
    // Toggle the disabled state and update the button text
    setButtonState((prev) => ({
      ...prev,
      disabled: !prev.disabled,
      text: prev.disabled ? "Second Button" : "Button Clicked",
    }));
  };

  root.render(
    <main>
      <MyButton3 text={buttonState.text} disabled={buttonState.disabled} onClick={handleButtonClick} />
    </main>
  );
}

export default App;
