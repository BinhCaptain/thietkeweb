import React, { useEffect, useState } from 'react';
import MyButton1 from './MyButton1';
import MyList from './MyList';

const Ex12 = () => {
  const initialState = {
    text: "My Button1",
    disabled: true,
    items: ["first", "Second", "Third"],
  };

  const [newAppState, setNewAppState] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setNewAppState((prevState) => ({ ...prevState, disabled: false, items: [...prevState.items, "four"] }));
    }, 1000);
  }, [newAppState]);

  return (
    <div>
      <MyButton1 disabled={newAppState.disabled}>{newAppState.text}</MyButton1>
      <MyList items={newAppState.items}></MyList>
    </div>
  );
};

export default Ex12;
