import React from 'react';
import './styles.css';

const DrumButton = ({ keyName, onClick }) => (
  <button className={`drum ${keyName}`} onClick={() => onClick(keyName)}>
    {keyName}
  </button>
);

class DrumKit extends React.Component {
  handleClick = (key) => {
    this.makeSound(key);
    this.buttonAnimation(key);
  };

  handleKeyboardEvent = (event) => {
    this.makeSound(event.key);
    this.buttonAnimation(event.key);
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyboardEvent);
  }

  makeSound = (key) => {
    switch (key) {
      case 'w':
        new Audio('sounds/tom-1.mp3').play();
        break;
      case 'a':
        new Audio('sounds/tom-2.mp3').play();
        break;
      case 's':
        new Audio('sounds/snare.mp3').play();
        break;
      case 'd':
        new Audio('sounds/tom-4.mp3').play();
        break;
      case 'j':
        new Audio('sounds/crash.mp3').play();
        break;
      case 'k':
        new Audio('sounds/tom-3.mp3').play();
        break;
      case 'l':
        new Audio('sounds/kick-bass.mp3').play();
        break;
      case 'z':
        new Audio('sounds/tom-4.mp3').play();
        break;
      case 'x':
        new Audio('sounds/tom-3.mp3').play();
        break;
      case 'c':
        new Audio('sounds/tom-4.mp3').play();
        break;
      default:
        break;
    }
  };

  buttonAnimation = (key) => {
    const activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add('pressed');
    document.body.classList.add('modify-body');
    setTimeout(() => {
      activeButton.classList.remove('pressed');
      document.body.classList.remove('modify-body');
    }, 200);
  };

  render() {
    return (
      <div className='kit'>
        <h1 id="title">Drum 🥁 Kit</h1>
        <div className="set">
          <DrumButton keyName="w" onClick={this.handleClick} />
          <DrumButton keyName="a" onClick={this.handleClick} />
          <DrumButton keyName="s" onClick={this.handleClick} />
          <DrumButton keyName="d" onClick={this.handleClick} />
          <DrumButton keyName="j" onClick={this.handleClick} />
          <DrumButton keyName="k" onClick={this.handleClick} />
          <DrumButton keyName="l" onClick={this.handleClick} />
        </div>
        <div className="set">
          <DrumButton keyName="z" onClick={this.handleClick} />
          <DrumButton keyName="x" onClick={this.handleClick} />
          <DrumButton keyName="c" onClick={this.handleClick} />
        </div>
        <footer style={{ marginTop: '70px' }}></footer>
      </div>
    );
  }
}

export default DrumKit;
