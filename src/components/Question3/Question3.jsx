import React, { useEffect } from "react";

const Question3 = () => {

    const findUniq = (lists) => {
        let countList = [];
        lists.map(n => {
            let index = countList.findIndex(list => list.num === n);
            if (index === -1) {
                countList.push({ num: n, count: 1 });
            } else {
                countList[index].count = countList[index].count + 1;
            }
        })
        const uniq = countList.find(list => list.count === 1);
        console.log(uniq ? 'Q3 [' + lists.join(', ') + '] Uniq number is: ' + uniq.num : 'Q3 [' + lists.join(', ') + '] No uniq number');
    }

    useEffect(() => {
        findUniq([1, 1, 1, 2, 1, 1]);
        findUniq([0, 0, 0.55, 0, 0]);
    }, []);

    return (
        <div>
            <h2>Question 3</h2>
            <p>See answer on console.</p>
        </div>
    )
}

export default Question3;