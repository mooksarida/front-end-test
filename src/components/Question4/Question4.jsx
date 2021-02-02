import React, { useEffect } from "react";
import Card from './Card';
import './Question4.scss';

const Information = {
    name: 'Jessica Potter',
    position: 'Visual Artist',
    posts: 533,
    likes: 1387,
    follows: 146
}

const Question4 = () => {
    return (
        <div className="q4-wrap">
            <h2>Question 4</h2>
            <div className="bg-container">
                <Card information={Information} />
            </div>
        </div>
    )
}

export default Question4;