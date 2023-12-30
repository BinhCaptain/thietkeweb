// Ex46.js

import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
  fontSize: '15px',
  backgroundColor: '#d0f0c0',
  border: '1px solid green',
  // Add any other styles you may need
};

const Ex46 = () => (
  <div style={divStyle}>Green is the prime color of the world</div>
);

ReactDOM.render(<Ex46 />, document.getElementById('root'));

export default Ex46;
