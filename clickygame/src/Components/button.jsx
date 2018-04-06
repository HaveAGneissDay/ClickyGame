import React from 'react';

const Button = (props) => <div className="button" onClick={props.clickHandler}> {props.text}</div>;

export default Button;