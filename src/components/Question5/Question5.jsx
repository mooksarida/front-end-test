import React, { useEffect } from "react";

const Question5 = () => {

    String.prototype.toCamelCase = function () {
        return this.replace(/[^a-z ]/ig, '')  // Replace everything but letters and spaces.
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, // Find non-words, uppercase letters, leading-word letters, and multiple spaces.
                function (match) {
                    return +match === 0 ? "" : match['toUpperCase']();
                });
    }

    return (
        <div >
            <h2>Question 5</h2>
            <p>{"hello case".toCamelCase()}</p>
            <p>{"camel case word".toCamelCase()}</p>
        </div>
    )
}

export default Question5;