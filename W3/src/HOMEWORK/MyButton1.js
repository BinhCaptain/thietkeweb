import React from 'react';

const MyButton1 = (props) => {
    const {disabled, children} = props;
    return(
        <button disabled={disabled}>{children}</button>
    );
};

export default MyButton1;