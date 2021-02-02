import React, { useState, useEffect } from "react";

const Question1 = () => {

  useEffect(() => {
    const carLists = [
      { "name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"] },
      { "name": "john", "cars": ["BMW 320D"] },
      { "name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"] }
    ];

    const sortCarListDatas = () => {
      return carLists.sort(function (a, b) {
        if (a.cars.join(', ').toLowerCase() < b.cars.join(', ').toLowerCase()) return -1;
        if (a.cars.join(', ').toLowerCase() > b.cars.join(', ').toLowerCase()) return 1;
        return 0;
      });
    }
    setDatas(sortCarListDatas());

  }, []);

  const [datas, setDatas] = useState(null);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return <div>
    <h2>Question 1</h2>
    {
      datas && datas.map(data => {
        return <p key={data.name}>{`${capitalize(data.name)} want to buy ${data.cars.join(', ')}`}</p>
      })
    }

  </div>
}

export default Question1;