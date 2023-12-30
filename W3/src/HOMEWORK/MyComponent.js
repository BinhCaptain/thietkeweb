// MyComponent.js
import React from 'react';

class MyComponent extends React.Component {
  state = {
    first: false,
    second: true,
  };

  handleButtonClick = (button) => {
    this.setState((prevState) => ({
      [button]: !prevState[button],
    }));
  };

  render() {
    const { first, second } = this.state;
    return (
      <main>
        <section>
          <button disabled={first} onClick={() => this.handleButtonClick("first")}>
            first
          </button>
        </section>
        <section>
          <button disabled={second} onClick={() => this.handleButtonClick("second")}>
            second
          </button>
        </section>
      </main>
    );
  }
}

export default MyComponent;
