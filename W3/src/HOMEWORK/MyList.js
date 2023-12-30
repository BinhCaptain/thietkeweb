import React from 'react';

const MyList = (props) => {
  return (
    <ul>
      {props.items.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default MyList;
