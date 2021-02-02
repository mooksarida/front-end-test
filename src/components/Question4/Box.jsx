import React from "react";
import './Box.scss';
const Box = ({ boxTitile, boxValue }) => {
    return (
        <div className="box">
            <div className="box-content">
                <div className="title">{boxValue}</div>
                <div className="sub-title">{boxTitile}</div>
            </div>
        </div>
    )
}

export default Box;