import React from "react";
import ReactDOM from "react-dom";
import MyInput from "./MyInput";

class Ex3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Please enter something</h1>
                <MyInput />
            </div>
        );
    }
}

const root = document.getElementById("root");
ReactDOM.render(<Ex3 />, root);
export default Ex3;
