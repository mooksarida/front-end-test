import React from "react";
import './Button.scss';
const Button = ({buttonMessage}) => {
    return (
        <button className="button">{buttonMessage}</button>
    )
}

export default Button;